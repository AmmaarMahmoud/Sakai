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
      count:['',[Validators.required]],
      price:[{value:'', disabled:this.isDisabled},[Validators.required]],
    })
  )
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
      console.log(this.typetax);
      console.log(value);
      console.log(this.option.price);
      const length=this.product_Orders.length-1
      this.product_Orders.controls[length].get('price')?.patchValue(this.option.price);
      
    }
  })
}
proccesstotalAmount(event:any){
  localStorage.removeItem('count')
  const count=event.target.value
  localStorage.setItem('count',count)

  setTimeout(()=>{
    this.total=this.option.price*Number(localStorage.getItem('count'))
    this.totalAmount?.patchValue(this.total)
    this.totalAmountWithTax?.patchValue(this.typetax!=0?this.total*(15/100):this.total)
    // this.
    console.log(this.total);
    
  },1000)
  
}
ngOnDestroy(): void {
  this.Order.OneOrder=undefined
}
}
