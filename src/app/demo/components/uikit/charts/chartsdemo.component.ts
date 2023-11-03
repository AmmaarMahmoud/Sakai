import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './chartsdemo.component.html'
})
export class ChartsDemoComponent implements OnInit {
    products!: any[];


    constructor(private route : Router) {
        this.products =[
            {id:1,name:'Bamboo Watch',item:'نتسبرتن',price:'201'},
            {id:2,name:'Bamboo Watch',item:'نتسبرتن',price:'201'},
            {id:3,name:'Bamboo Watch',item:'خقهلف',price:'65'},
            {id:4,name:'Bamboo Watch',item:'هينستبا',price:'5465'},
            {id:5,name:'Bamboo Watch',item:'خقهلف',price:'14698'},
            {id:6,name:'Bamboo Watch',item:'سءرؤ ',price:'25361'},
            {id:7,name:'Bamboo Watch',item:'نءرؤ',price:'849'},
            {id:8,name:'Bamboo Watch',item:'يس ر',price:'321'},
            {id:9,name:'Bamboo Watch',item:'يبلسييسب',price:'51615'},
        ]
    }
    ngOnInit(): void {
        
    }
    SupplierDetails(id:number){
        this.route.navigate(['uikit/Suppliers/details',id])
        
    }
    AddSupplier(){
        this.route.navigate(['uikit/Suppliers/addSupplier'])
    }
}
