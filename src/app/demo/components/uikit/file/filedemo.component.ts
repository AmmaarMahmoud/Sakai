import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs';
import { Product } from 'src/app/demo/api/product';
import { CategoryService } from 'src/app/demo/service/Categores/category.service';
import { ProductService } from 'src/app/demo/service/Products/product.service';

@Component({
    templateUrl: './filedemo.component.html',
    providers: [MessageService]
})
export class FileDemoComponent implements OnInit {

    products!:Product[];
    visible: boolean = false;

    constructor(
            private route : Router,
            private product:ProductService,
            private category:CategoryService
        ) {}

    ngOnInit(): void {
        this.getAllProducts()
        this.getAllCategores()
    }

    showDialog() {
        this.visible = true;
    }
    hideDialog(){
      this.visible = false;
    }

    StoreDetails(id:number){
        this.route.navigate(['uikit/stores/details',id])
    }

    addProduct(){
        this.route.navigate(['uikit/stores/addStore'])
    }
    getAllCategores(){
        this.category.GetAllCategory().pipe(
            map((values:any)=>{
                return values.data.map((value:any)=>{
                    return {
                        id:value.id,
                        name:value.name
                    }
                })
            })
        ).subscribe((data:any)=>{
            this.category.AllCategores=data
            console.log(data);
            
        })
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
