import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { ClientService } from 'src/app/demo/service/Client/client.service';
import { ProductService } from 'src/app/demo/service/Products/product.service';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.scss']
})
export class AddSalesComponent implements OnInit {
  MyForm!:FormGroup;
  selectedNodes?:any
  AllClient:any
  AllProducts:any
  constructor(private builder :FormBuilder, private Client:ClientService , private product:ProductService ){
    this.MyForm=this.builder.group({
      paid:['',[Validators.required]],
      totalAmount:['',[Validators.required]],
      discount:['',[Validators.required]],
      valueAddedTax:['',[Validators.required]],
      totalAmountWithTax:['',[Validators.required]],
      name_Client:[' ',[Validators.required]],
      product_Orders:this.builder.array([
   
      ]),
    })
  }

  ngOnInit(): void {
    this.getAllClient()
    this.getAllProduct()
  }

get paid(){
  return this.MyForm.get('paid')
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
  if(this.selectedNodes===1){
    this.MyForm.addControl('client_ID', new FormControl('اختر المؤسسه',[Validators.required]));
  }
  else{
    this.MyForm.removeControl('client_ID')
  }
}

onSubmit(){
  console.log(this.MyForm.value)
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
    console.log(data.data);
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
    this.AllProducts=data
    console.log(data);
  })
}
}
