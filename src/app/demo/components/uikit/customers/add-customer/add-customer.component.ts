import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Wanted } from 'src/app/demo/api/wanted';
import { WantedService } from 'src/app/demo/service/Wanted/wanted.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit , OnDestroy {
  MyForm!:FormGroup;
  constructor(
    private builder :FormBuilder, 
    private route :Router,
    private Wanted:WantedService
    ){
    
    this.MyForm=this.builder.group({
      name:['',[Validators.required]],
      phone:['',[Validators.required]],
      address:['',[Validators.required]],
      // number:['',[Validators.required]],
    })
  }


  ngOnInit(): void {
    this.CheckWanted()
    console.log(this.Wanted.oneWanted);
    
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
// get number(){
//   return this.MyForm.get('number')
// }

onSubmit(){
  const checkWanted = this.Wanted.oneWanted
  
  if(checkWanted){
    const wanted = new Wanted(checkWanted.id,this.name?.value,this.phone?.value,this.address?.value)
    this.UpdateWanted(wanted)
  }
  else{
    this.AddWanted()
  }
}

AddWanted(){
  const wanted = new Wanted(0,this.name?.value,this.phone?.value,this.address?.value)
  this.Wanted.AddWanted(wanted).subscribe((data:any)=>{
    console.log(data);
    this.route.navigate(['uikit/customers'])
  })
}
UpdateWanted(UpdateWanted:Wanted){
  this.Wanted.UpdateWanted(UpdateWanted).subscribe((data:any)=>{
    this.route.navigate(['uikit/customers'])
  })
}
CheckWanted(){
  const checkWanted = this.Wanted.oneWanted
  if(checkWanted){
    this.MyForm.patchValue({
      id:checkWanted.id,
      name:checkWanted.name,
      phone:checkWanted.phone,
      address:checkWanted.address,
    })
  }
  else{
    this.Wanted.oneWanted=undefined
  }
}
ngOnDestroy(): void {
  this.Wanted.oneWanted=undefined
}

}
