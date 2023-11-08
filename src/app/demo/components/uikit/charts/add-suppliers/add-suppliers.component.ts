import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/demo/api/client';
import { ClientService } from 'src/app/demo/service/Client/client.service';

@Component({
  selector: 'app-add-suppliers',
  templateUrl: './add-suppliers.component.html',
  styleUrls: ['./add-suppliers.component.scss']
})
export class AddSuppliersComponent implements OnInit , OnDestroy {
  MyForm!:FormGroup;
  constructor(
    private builder :FormBuilder, 
    private route :Router,
    private Client:ClientService
    ){
    
    this.MyForm=this.builder.group({
      name:['',[Validators.required]],
      phone:['',[Validators.required]],
      address:['',[Validators.required]],
      number:['',[Validators.required]],
    })
  }


  ngOnInit(): void {
    this.CheckSupplier()
  }


get name(){
  return this.MyForm.get('name')
}

get address(){
  return this.MyForm.get('address')
}

get phone(){
  return this.MyForm.get('phone')
}
get number(){
  return this.MyForm.get('number')
}

onSubmit(){
  const checkClient = this.Client.oneClient
  
  if(checkClient){
    const client = new Client(checkClient.id,this.name?.value,this.phone?.value,this.address?.value,this.number?.value)
    this.UpdateSupplier(client)
  }
  else{
    this.AddSupplier()
  }
}

AddSupplier(){
  const client = new Client(0,this.name?.value,this.phone?.value,this.address?.value,this.number?.value)
  this.Client.AddClient(client).subscribe((data:any)=>{
    console.log(data);
    this.route.navigate(['uikit/Suppliers'])
  })
}
UpdateSupplier(UpdateSupplier:Client){
  this.Client.UpdateClient(UpdateSupplier).subscribe((data:any)=>{
    this.route.navigate(['uikit/Suppliers'])
  })
}
CheckSupplier(){
  const checkClient = this.Client.oneClient
  if(checkClient){
    this.MyForm.patchValue({
      id:checkClient.id,
      name:checkClient.name,
      phone:checkClient.phone,
      address:checkClient.address,
      number:checkClient.number,
    })
  }
  else{
    this.Client.oneClient=undefined
  }
}
ngOnDestroy(): void {
  this.Client.oneClient=undefined
}

}
