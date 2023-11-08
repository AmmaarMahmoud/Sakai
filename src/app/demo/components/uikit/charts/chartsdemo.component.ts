import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { Client } from 'src/app/demo/api/client';
import { ClientService } from 'src/app/demo/service/Client/client.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './chartsdemo.component.html'
})
export class ChartsDemoComponent implements OnInit {
    AllClient!: Client[];


    constructor(
        private route : Router,
        private Client:ClientService
    ) {}


    ngOnInit(): void {
        this.GetAllClient()
    }
    SupplierDetails(id:number){
        this.route.navigate(['uikit/Suppliers/details',id])
    }
    AddSupplier(){
        this.route.navigate(['uikit/Suppliers/addSupplier'])
    }
    GetAllClient(){
        this.Client.GetAllClient().pipe(
            map((data:any)=>{
                return data.data
            })
        ).subscribe((data:any)=>{
            this.AllClient=data
            console.log(this.AllClient);
        })
    }
    deleteSupplier(id:number){
        this.Client.DeleteClient(id).subscribe((data:any)=>{
            console.log(data);
            this.GetAllClient()
        })
    }
    UpdateSupplier(body:any){
        this.Client.oneClient=body
        this.route.navigate(['uikit/Suppliers/addSupplier'])
    }
}
