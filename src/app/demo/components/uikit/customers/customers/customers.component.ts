import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Wanted } from 'src/app/demo/api/wanted';
import { WantedService } from 'src/app/demo/service/Wanted/wanted.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit  {
  AllWanted!: Wanted[];


  constructor(
      private route : Router,
      private Wanted:WantedService
  ) {}



  ngOnInit(): void {
      this.GetAllWanted()
  }
  WantedDetails(id:number){
      this.route.navigate(['uikit/customers/details',id])
  }
  AddWanted(){
      this.route.navigateByUrl('uikit/customers/addCustomer')
  }
  GetAllWanted(){
      this.Wanted.GetAllWanted().pipe(
          map((data:any)=>{
              return data.data
          })
      ).subscribe((data:any)=>{
          this.AllWanted=data
          console.log(this.AllWanted);
      })
  }
  deleteWanted(id:number){
      this.Wanted.DeleteWanted(id).subscribe((data:any)=>{
          console.log(data);
          this.GetAllWanted()
      })
  }
  UpdateWanted(body:any){
      this.Wanted.oneWanted=body
      console.log(body);
      
      this.route.navigate(['uikit/customers/addCustomer'])
  }
  CustomerDetails(id:number){
    this.route.navigate(['uikit/customers/details',id])
  }

}
