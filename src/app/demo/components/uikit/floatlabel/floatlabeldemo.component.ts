import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { PurchasesService } from 'src/app/demo/service/Purchases/purchases.service';

@Component({
    templateUrl: './floatlabeldemo.component.html',
})
export class FloatLabelDemoComponent implements OnInit {

    purchases!: any[];


    constructor(private route : Router , private purchase:PurchasesService) {
        
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
        })
    }

    deletepurchase(id:number){
        this.purchase.DeletePurchase(id).subscribe((data:any)=>{
            console.log(data);
            this.getAllpurchases()
        })
    }

    Updatepurchase(body:any){
        this.purchase.OnePurchase=body
        console.log(body);
        this.route.navigate(['uikit/Purchases/addproduct'])
    }
}
