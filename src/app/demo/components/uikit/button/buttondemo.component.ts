import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './buttondemo.component.html'
})
export class ButtonDemoComponent implements OnInit {

    products!: any[];


    constructor(private route :Router) {
        this.products =[
            {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },
            {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

            {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

            {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

            {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

            {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

            {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

            {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

            {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

        ]
    }
    ngOnInit(): void {
        
    }
    salesDetails(id:number){
        this.route.navigate(['uikit/sales/details',id])
    }
}
