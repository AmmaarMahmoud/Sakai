import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ClientService } from 'src/app/demo/service/Client/client.service';
import { OrderService } from 'src/app/demo/service/Order/order.service';
import { ProductService } from 'src/app/demo/service/Products/product.service';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.scss']
})
export class AddSalesComponent implements OnInit,OnDestroy {
  MyForm!:FormGroup;
  selectedNodes?:any
  AllClient:any
  AllProducts:any
  constructor(
    private builder :FormBuilder,
    private Client:ClientService , 
    private product:ProductService , 
    private Order:OrderService,
    private route:Router
    ){
    this.MyForm=this.builder.group({
      // paid:['',[Validators.required]],
      totalAmount:['',[Validators.required]],
      // discount:['',[Validators.required]],
      valueAddedTax:['',[Validators.required]],
      totalAmountWithTax:['',[Validators.required]],
      name_Client:[' ',[Validators.required]],
      product_Orders:this.builder.array([
   
      ]),
    })
  }

  ngOnInit(): void {
    this.AllClient=this.Client.AllClient
    this.AllProducts=this.product.AllProduct
    this.checkOneOrder()
    console.log(this.AllClient);
  }

// get paid(){
//   return this.MyForm.get('paid')
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
get name_Client(){
  return this.MyForm.get('name_Client')
}
get client_ID(){
  return this.MyForm.get('client_ID')
}
get product_Orders(){
  return this.MyForm.get('product_Orders') as FormArray
}

selected(event:any){
  this.selectedNodes=Number(event.target.value)
  console.log(event.target.value);
  
  if(this.selectedNodes===1){
    this.MyForm.addControl('client_ID', new FormControl('اختر المؤسسه',[Validators.required]));
  }
  else{
    this.MyForm.removeControl('client_ID')
  }
}

onSubmit(){
  const OneOrder=this.Order.OneOrder
  if(!OneOrder){
    this.Order.AddSales(this.MyForm.value).subscribe((data:any)=>{
      this.route.navigate(['uikit/sales'])
      console.log(this.MyForm.value);
      
    })
  }
  else{
    
    this.Order.UpdateSales(this.MyForm.value).subscribe((data:any)=>{
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
      price:['',[Validators.required]],
    })
  )
}
ngOnDestroy(): void {
  this.Order.OneOrder=undefined
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
      paymentMethod:OneOrder.paymentMethod,
      valueAddedTax:OneOrder.valueAddedTax,
      totalAmount:OneOrder.totalAmount,
      totalAmountWithTax:OneOrder.totalAmountWithTax,
      client_ID:OneOrder.client_ID,
    })
  }
}
}
