import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ClientService } from 'src/app/demo/service/Client/client.service';
import { ProductService } from 'src/app/demo/service/Products/product.service';
import { PurchasesService } from 'src/app/demo/service/Purchases/purchases.service';

@Component({
    templateUrl: './floatlabeldemo.component.html',
})
export class FloatLabelDemoComponent implements OnInit {

    purchases!: any[];


    constructor(
        private route : Router , 
        private purchase:PurchasesService,
        ) {
        
    }
    ngOnInit(): void {
        this.getAllpurchases()
      
    }
    purchasDetails(id:number){
        this.route.navigate(['/uikit/Purchases/details',id])
    }

    getAllpurchases(){
        this.purchase.GetAllPurchase().subscribe((data:any)=>{
            this.purchases=data.data
            console.log( this.purchases);
        })
    }

    deletepurchase(id:number){
        this.purchase.DeletePurchase(id).subscribe((data:any)=>{
            console.log(data);
            this.getAllpurchases()
        })
    }

    Updatepurchase(id:number){
        this.purchase.GetOnePurchase(id).pipe(
            map((values:any)=>{
                return values.data
            })
        ).subscribe((data?:any)=>{
            console.log(data);
            this.purchase.OnePurchase=data
            this.route.navigate(['uikit/Purchases/addproduct'])
        })
        
    }
   
}
