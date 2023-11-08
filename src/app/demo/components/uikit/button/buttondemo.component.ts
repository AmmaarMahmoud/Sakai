import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { OrderService } from 'src/app/demo/service/Order/order.service';

@Component({
    templateUrl: './buttondemo.component.html'
})
export class ButtonDemoComponent implements OnInit {

    AllSales!: any[];


    constructor(private route :Router, private Order:OrderService) {
        // this.products =[
        //     {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },
        //     {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

        //     {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

        //     {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

        //     {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

        //     {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

        //     {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

        //     {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

        //     {Name_Client:'Ahmed',Client_ID:'1',Client:'Ali',Date:'1/1/2001',Invoce_number:'idhgotd',Paid:4000 , Totle_Amount:'35126' , Discount:5 , Value_Added_Tax:12 , Totle_Amount_with_tax:15,Product_Order:'ksjhvi' },

        // ]
    }
    ngOnInit(): void {
        this.getAllSales()
    }
    salesDetails(id:number){
        this.route.navigate(['uikit/sales/details',id])
    }

    getAllSales(){
        this.Order.GetAllSales() .pipe(
            map((values:any)=>{
                return values.data
            })
        ).subscribe((data:any)=>{
           this.AllSales=data
           console.log(data);
           
        })
    }
    UpdateSales(id:any){
        this.Order.GetOneSales(id).pipe(
            map((values:any)=>{
                return values.data
            })
        ).subscribe((data:any)=>{
            this.Order.OneOrder=data
            console.log(data);
            
            this.route.navigate(['uikit/sales/addsales'])
        })
    }
   
    deleteSales(id:number){
        this.Order.DeleteSales(id).subscribe((data:any)=>{
            this.getAllSales()
        })
    }
}
