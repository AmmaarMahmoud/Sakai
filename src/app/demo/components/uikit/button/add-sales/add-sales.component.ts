import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Sales } from 'src/app/demo/api/sales';
import { OrderService } from 'src/app/demo/service/Order/order.service';
import { ProductService } from 'src/app/demo/service/Products/product.service';
import { WantedService } from 'src/app/demo/service/Wanted/wanted.service';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.scss']
})
export class AddSalesComponent implements OnInit,OnDestroy {
  MyForm!:FormGroup;
  selectedNodes?:any
  AllWanted:any
  AllProduct:any
  isDisabled:boolean=true
  total:number=0
  typetax?:number
  option:any
  constructor(
    private builder :FormBuilder,
    private wanted:WantedService, 
    private product:ProductService , 
    private Order:OrderService,
    private route:Router
    ){
    this.MyForm=this.builder.group({
      wanted_ID:['اختر اسم العميل',[Validators.required]],
      totalAmount:[{value:'', disabled:this.isDisabled},[Validators.required]],
      valueAddedTax:['',[Validators.required]],
      totalAmountWithTax:[{value:'', disabled:this.isDisabled},[Validators.required]],
      product_Orders:this.builder.array([
   
      ]),
    })
  }

  ngOnInit(): void {
    this.AllWanted=this.wanted.AllWanted
    this.AllProduct=this.product.AllProduct
    this.checkOneOrder()
    console.log(this.AllWanted);
  }

get wanted_ID(){
  return this.MyForm.get('wanted_ID')
}
get totalAmount(){
  return this.MyForm.get('totalAmount')
}

get valueAddedTax(){
  return this.MyForm.get('valueAddedTax')
}
get totalAmountWithTax(){
  return this.MyForm.get('totalAmountWithTax')
}

get product_Orders(){
  return this.MyForm.get('product_Orders') as FormArray
}

onSubmit(){
  const OneOrder=this.Order.OneOrder
  if(!OneOrder){
    const order= new Sales(0,Number(this.wanted_ID?.value),this.totalAmount?.value,this.valueAddedTax?.value,this.totalAmountWithTax?.value,this.product_Orders?.value,)
    this.Order.AddSales(order).subscribe((data:any)=>{
      this.route.navigate(['uikit/sales'])
      console.log(this.MyForm.value);
    })
  }
  else{
    const order2= new Sales(OneOrder.id,Number(this.wanted_ID?.value),this.totalAmount?.value,this.valueAddedTax?.value,this.totalAmountWithTax?.value,this.product_Orders?.value,)
    this.Order.UpdateSales(order2).subscribe((data:any)=>{
      this.route.navigate(['uikit/sales'])
      console.log(this.MyForm.value);
    })
  }
}

AddProducts(){
  this.product_Orders.push(
    this.builder.group({
      id:['اختر اسم المنتج',[Validators.required]],
      order_ID:['0',[Validators.required]],
      count:['0',[Validators.required]],
      price:[{value:'', disabled:this.isDisabled},[Validators.required]],
    })
  )
  this.option=undefined
}

EnterKeydown(event:any){
  event.preventDefault()
}

checkOneOrder(){
  const OneOrder = this.Order.OneOrder
  console.log(OneOrder);
  
  if(OneOrder){
    console.log(OneOrder.product_Orders);
    
    OneOrder.product_Orders?.forEach((obj:any)=>{
      let group:FormGroup = this.builder.group({
            id:[obj.id,[Validators.required]],
            order_ID:[obj.purchase_ID,[Validators.required]],
            count:[obj.count,[Validators.required]],
            price:[obj.price,[Validators.required]]
        })
      this.product_Orders.push(group)
    })
    this.MyForm.patchValue({
      valueAddedTax:OneOrder.valueAddedTax,
      totalAmount:OneOrder.totalAmount,
      totalAmountWithTax:OneOrder.totalAmountWithTax,
      wanted_ID:OneOrder.wanted_ID,
    })
  }
}
typeTax(event:any){
  const id = Number(event.target.value)
  console.log(id);
  this.AllProduct.forEach((value:any)=>{
    if(id===value.id){
      this.typetax=value.type_tax
      this.option=value
      const length=this.product_Orders.length-1
      this.product_Orders.controls[length].get('price')?.patchValue(this.option.price);
    }
  })
}

procces:any={
  totalAmount:[],
  totalAmountWithTax:[]
}
timeOut:any
proccesstotalAmount(event:any){
  clearTimeout(this.timeOut)

  localStorage.removeItem('count')
  localStorage.setItem('count',event.target.value)
  this.timeOut=setTimeout(() => {

  if( Number(localStorage.getItem('count'))){
    let totalAmount:number=0
    let totalAmountWithTax:number=0
    
    this.product_Orders.controls.forEach((values:any)=>{
      console.log(this.MyForm.value);
      if( Number(localStorage.getItem('count')) === values.get('count').value){
        console.log('ammar');
        let index=this.product_Orders.controls.indexOf(values)
        this.procces.totalAmount[index]=values.get('price')?.value *  Number(localStorage.getItem('count'))
        this.procces.totalAmountWithTax[index]=totalAmount*(15/100)
      }
    })
    this.procces.totalAmount.forEach((data:number)=>{
      totalAmount+=data
    })
    this.procces.totalAmountWithTax.forEach((data:number)=>{
      totalAmountWithTax+=data
    })
    this.totalAmount?.patchValue(totalAmount)
    this.totalAmountWithTax?.patchValue(this.typetax!=0?totalAmountWithTax:totalAmount)
  }
  }, 2000);

  // clearTimeout(this.timeOut)
  // this.total=0
  // localStorage.removeItem('count')
  // localStorage.removeItem('total')
  // const count=event.target.value
  // localStorage.setItem('count',count)
  //   this.total=this.option.price * Number(localStorage.getItem('count'))
  //   localStorage.setItem('total',this.total.toString())
  //  this.timeOut=setTimeout(() => {
  //   console.log(Number(localStorage.getItem('count')));
    
  //  if(Number(localStorage.getItem('count')) && this.option.price){
  //   const total = Number(localStorage.getItem('total'))
  //   this.procces.totalAmount.push(total)
  //   this.procces.totalAmountWithTax.push(this.typetax!=0?total * (15/100) : total)
  //   let totalAmount:number=0
  //   let totalAmountWithTax:number=0
  //   this.procces.totalAmount.forEach((value:any) => {
  //     totalAmount+=value
  //   });
  //   this.procces.totalAmountWithTax.forEach((value:any) => {
  //     totalAmountWithTax+=value
  //   });
  //   this.totalAmount?.patchValue(totalAmount)
  //   this.totalAmountWithTax?.patchValue(totalAmountWithTax)
  //   console.log(this.procces);
  //   console.log(this.product_Orders.controls[0].get('price')?.value);
    
  //  }
  //  }, 2000);
}
ngOnDestroy(): void {
  this.Order.OneOrder=undefined
  this.total=0
  this.procces.totalAmount=[]
  this.procces.totalAmountWithTax=[]
  this.option=undefined
}
}
