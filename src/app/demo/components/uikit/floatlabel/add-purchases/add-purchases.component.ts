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
  constructor(
    private builder :FormBuilder, 
    private Client:ClientService,
    private product:ProductService,
    private purchase:PurchasesService, 
    private route :Router
    ){
    
    this.MyForm=this.builder.group({
      paymentMethod:['الضريبه',[Validators.required]],
      valueAddedTax:['',[Validators.required]],
      // storeNumber:['',[Validators.required]],
      totalAmount:['',[Validators.required]],
      // discount:['',[Validators.required]],
      totalAmountWithTax:['',[Validators.required]],
      client_ID:['اختر اسم المورد',[Validators.required]],
      product_Purchases:this.builder.array([

      ]),
    })

  }


  ngOnInit(): void {
    this.AllClient=this.Client.AllClient
    this.AllProduct=this.product.AllProduct
    this.checkPurchase()
  }

get paymentMethod(){
  return this.MyForm.get('paymentMethod')
}
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
      Number(this.paymentMethod?.value),
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
    const paymentMethod =  Number(this.paymentMethod?.value)
    const client_ID =Number(this.client_ID?.value)
    const product_Purchases:product_Purchases[]=this.product_Purchases.value
    console.log(this.MyForm.value);
    
    const purchase = new Purchase(
        0,
        paymentMethod,
        this.valueAddedTax?.value,
        this.totalAmount?.value,
        this.totalAmountWithTax?.value,
        client_ID,
        product_Purchases
      )
    this.purchase.AddPurchase(purchase).subscribe(
      (data:any)=>{
      console.log(data);
      this.route.navigate(['uikit/Purchases'])
    }
 
    )
  }
  
}
isEmpty(){
  this.MyForm.patchValue({})
}
AddProducts(){
  let Group =this.builder.group({
    id:['اختر اسم المنتج',[Validators.required]],
    order_ID:['0',[Validators.required]],
    count:['',[Validators.required]],
    price:['',[Validators.required]],
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
              id:[obj.id,[Validators.required]],
              purchase_ID:[obj.purchase_ID,[Validators.required]],
              count:[obj.count,[Validators.required]],
              price:[obj.price,[Validators.required]]
          })
        this.product_Purchases.push(group)
      })
      this.MyForm.patchValue({
        paymentMethod:purchase.paymentMethod,
        valueAddedTax:purchase.valueAddedTax,
        totalAmount:purchase.totalAmount,
        totalAmountWithTax:purchase.totalAmountWithTax,
        client_ID:purchase.client_ID,
      })
    }
  }
  ngOnDestroy(): void {
    this.purchase.OnePurchase=undefined
  }
}


