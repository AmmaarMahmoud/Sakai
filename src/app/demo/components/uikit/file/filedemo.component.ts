import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/Products/product.service';

@Component({
    templateUrl: './filedemo.component.html',
    providers: [MessageService]
})
export class FileDemoComponent implements OnInit {

    products!:Product[];


    constructor(private route : Router, private product:ProductService) {
      
    }
    ngOnInit(): void {
        this.getAllProducts()
    }

    StoreDetails(id:number){
        this.route.navigate(['uikit/stores/details',id])
    }

    addProduct(){
        this.route.navigate(['uikit/stores/addStore'])
    }

    getAllProducts(){
        this.product.GetAllProduct().subscribe((data=>{
            this.products=data.data
            console.log(this.products);
        }))
    }
    
    deleteProduct(id:number){
        this.product.DeleteProduct(id).subscribe((data)=>{
            console.log(data);
            this.getAllProducts()
        })
    }
    Update(item:any){
        const oneProduct = new Product(item.id,item.name,item.tax,item.type_tax,item.price,item.unit,item.count,item.category_ID)
        this.product.OneUpdateProduct=oneProduct
        this.route.navigate(['uikit/stores/addStore'])
    }
}
