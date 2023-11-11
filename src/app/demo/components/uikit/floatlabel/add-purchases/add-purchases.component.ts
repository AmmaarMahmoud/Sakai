import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Purchase, product_Purchases } from 'src/app/demo/api/purchase';
import { ClientService } from 'src/app/demo/service/Client/client.service';
import { ProductService } from 'src/app/demo/service/Products/product.service';
import { PurchasesService } from 'src/app/demo/service/Purchases/purchases.service';

@Component({
  selector: 'app-add-purchases',
  templateUrl: './add-purchases.component.html',
  styleUrls: ['./add-purchases.component.scss']
})
export class AddPurchasesComponent implements OnInit,OnDestroy {
  AllClient:any
  AllProduct:any
  MyForm!:FormGroup;
  isDisabled:boolean=true
  total:number=0
  typetax?:number
  option:any
  constructor(
    private builder :FormBuilder, 
    private Client:ClientService,
    private product:ProductService,
    private purchase:PurchasesService, 
    private route :Router
    ){
    
    this.MyForm=this.builder.group({
      // paymentMethod:['الضريبه',[Validators.required]],
      valueAddedTax:['',[Validators.required]],
      // storeNumber:['',[Validators.required]],
      totalAmount:[{value:'', disabled: this.isDisabled},[Validators.required]],
      // discount:['',[Validators.required]],
      totalAmountWithTax:[{value:'', disabled: this.isDisabled},[Validators.required]],
      client_ID:['اختر اسم المورد',[Validators.required]],
      product_Purchases:this.builder.array([

      ]),
    })

  }


  ngOnInit(): void {
    this.AllClient=this.Client.AllClient
    this.AllProduct=this.product.AllProduct
    this.checkPurchase()
    // const count:number =this.MyForm.get('product_Purchases')?.get('count')?.value
    // const price:number =this.MyForm.get('product_Purchases')?.get('price')?.value
    // this.total=count*price
    // this.totalAmount?.value?.patchValue(this.total)
  }

// get paymentMethod(){
//   return this.MyForm.get('paymentMethod')
// }
// get storeNumber(){
//   return this.MyForm.get('storeNumber')
// }
get totalAmount(){
  return this.MyForm.get('totalAmount')
}
// get discount(){
//   return this.MyForm.get('discount')
// }
get valueAddedTax(){
  return this.MyForm.get('valueAddedTax')
}
get totalAmountWithTax(){
  return this.MyForm.get('totalAmountWithTax')
}
get client_ID(){
  return this.MyForm.get('client_ID')
}
get product_Purchases(){
  return this.MyForm.get('product_Purchases') as FormArray
}

SendClientID(event:any){
  const client_ID = Number(event.target.value)
  this.MyForm.get('client_ID')?.setValue(client_ID)
}

onSubmit(){
  const OnePurchase = this.purchase.OnePurchase
  console.log(OnePurchase);
  
  if(OnePurchase){

    const purchase = new Purchase(
      OnePurchase.id,
      // Number(this.paymentMethod?.value),
      this.valueAddedTax?.value,
      this.totalAmount?.value,
      this.totalAmountWithTax?.value,
      Number(this.client_ID?.value),
      this.product_Purchases.value
    )
    this.purchase.UpdatePurchase(purchase).subscribe((data:any)=>{
      console.log(data);
      this.route.navigate(['uikit/Purchases'])
    })
  }
  else{
    
    const client_ID =Number(this.client_ID?.value)
    const product_Purchases:product_Purchases[]=this.product_Purchases.value
    console.log(this.MyForm.value);
    
    const purchase = new Purchase(
      0,
      // Number(this.paymentMethod?.value),
      this.valueAddedTax?.value,
      this.totalAmount?.value,
      this.totalAmountWithTax?.value,
      client_ID,product_Purchases)
    this.purchase.AddPurchase(purchase).subscribe(
      (data:any)=>{
      console.log(data);
      this.route.navigate(['uikit/Purchases'])
    }
 
    )
  }
  
}

AddProducts(){
  let Group =this.builder.group({
    product_ID:['اختر اسم المنتج',[Validators.required]],
    purchase_ID:['0',[Validators.required]],
    count:['',[Validators.required]],
    price:[{value:'', disabled: this.isDisabled},[Validators.required]],
  })
  this.product_Purchases.push(Group)
  console.log(this.product_Purchases);
  
}

  checkPurchase(){
    const purchase = this.purchase.OnePurchase
    console.log(purchase);
    
    if(purchase){
      console.log(purchase.product_Purchases);
      
      purchase.product_Purchases?.forEach((obj:any)=>{
        let group:FormGroup = this.builder.group({
              product_ID:[obj.id,[Validators.required]],
              purchase_ID:[obj.purchase_ID,[Validators.required]],
              count:[obj.count,[Validators.required]],
              price:[obj.price,[Validators.required]]
          })
        this.product_Purchases.push(group)
      })
      this.MyForm.patchValue({
        totalAmount:purchase.totalAmount,
        valueAddedTax:purchase.valueAddedTax,
        totalAmountWithTax:purchase.totalAmountWithTax,
        client_ID:purchase.client_ID,
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
        const length=this.product_Purchases.length-1
        this.product_Purchases.controls[length].get('price')?.patchValue(this.option.price);
        
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
      console.log(this.total);
      
    },1000)
    
  }

  ngOnDestroy(): void {
    this.purchase.OnePurchase=undefined
  }
}


