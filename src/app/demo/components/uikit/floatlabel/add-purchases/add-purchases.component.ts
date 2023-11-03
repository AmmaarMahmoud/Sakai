import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Purchase, product_Purchases } from 'src/app/demo/api/purchase';
import { ClientService } from 'src/app/demo/service/Client/client.service';
import { ProductService } from 'src/app/demo/service/Products/product.service';
import { PurchasesService } from 'src/app/demo/service/Purchases/purchases.service';

@Component({
  selector: 'app-add-purchases',
  templateUrl: './add-purchases.component.html',
  styleUrls: ['./add-purchases.component.scss']
})
export class AddPurchasesComponent implements OnInit {
  MyForm!:FormGroup;
  AllClient:any
  AllProduct:any
  constructor(private builder :FormBuilder, private Client:ClientService,private purchase:PurchasesService, private product:ProductService){
    
    this.MyForm=this.builder.group({
      paymentMethod:['اختر طريقة الدفع',[Validators.required]],
      storeNumber:['',[Validators.required]],
      totalAmount:['',[Validators.required]],
      discount:['',[Validators.required]],
      valueAddedTax:['',[Validators.required]],
      totalAmountWithTax:['',[Validators.required]],
      client_ID:['اختر اسم المورد',[Validators.required]],
      product_Orders:this.builder.array([
      ]),
    })

  }

  ngOnInit(): void {
    this.getAllClient()
    this.getAllProduct()
    this.checkPurchase()
  }

get paymentMethod(){
  return this.MyForm.get('paymentMethod')
}
get storeNumber(){
  return this.MyForm.get('storeNumber')
}
get totalAmount(){
  return this.MyForm.get('totalAmount')
}
get discount(){
  return this.MyForm.get('discount')
}
get valueAddedTax(){
  return this.MyForm.get('valueAddedTax')
}
get totalAmountWithTax(){
  return this.MyForm.get('totalAmountWithTax')
}
get client_ID(){
  return this.MyForm.get('client_ID')
}
get product_Orders(){
  return this.MyForm.get('product_Orders') as FormArray
}

SendClientID(event:any){
  const client_ID = Number(event.target.value)
  this.MyForm.get('client_ID')?.setValue(client_ID)
}

onSubmit(){
  const paymentMethod =  (Number(this.paymentMethod?.value))
  const client_ID =Number(this.client_ID?.value)
  const product_Orders:product_Purchases[]=this.product_Orders.value
  console.log(this.product_Orders.value);
  
  const purchase = new Purchase(
      0,
      paymentMethod,
      this.storeNumber?.value,
      this.totalAmount?.value,
      this.discount?.value,
      this.valueAddedTax?.value,
      this.totalAmountWithTax?.value,
      client_ID,
      product_Orders
    )
  this.purchase.AddPurchase(purchase).subscribe((data:any)=>{
    console.log(data);
    
  })
  console.log(this.MyForm.value);
  
}

AddProducts(){
  this.product_Orders.push(
    this.builder.group({
      id:['',[Validators.required]],
      order_ID:['0',[Validators.required]],
      count:['',[Validators.required]],
    })
  )
}
getAllClient(){
  this.Client.GetAllClient().pipe(
    map((values:any)=>{
      return values.data.map((value:any)=>{
        return {
          id:value.id,
          name:value.name
        }
      })
    })
  ).subscribe((data:any)=>{
    this.AllClient=data
  })
}
  getAllProduct(){
    this.product.GetAllProduct().pipe(
      map((values:any)=>{
        return values.data.map((value:any)=>{
          return {
            id:value.id,
            name:value.name
          }
        })
      })
    ).subscribe((data:any)=>{
      this.AllProduct=data
    })
  }
  checkPurchase(){
    const purchase = this.purchase.OnePurchase
    if(purchase){
      this.MyForm.patchValue({
        paymentMethod:purchase.paymentMethod,
        storeNumber:purchase.storeNumber,
        totalAmount:purchase.totalAmount,
        discount:purchase.discount,
        valueAddedTax:purchase.valueAddedTax,
        totalAmountWithTax:purchase.totalAmountWithTax,
        client_ID:purchase.client_ID,
        product_Orders:this.builder.array([
          
        ]),
      })
    }
  }
}
