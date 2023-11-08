import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ClientService } from 'src/app/demo/service/Client/client.service';
import { ProductService } from 'src/app/demo/service/Products/product.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  products!: any[];
  visible: boolean = false;

  constructor(
    private Client:ClientService,
    private product:ProductService
  ) {
      this.products =[
          {code:'f230fh0g3',name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:'f230fh0g3',name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:'f230fh0g3',name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:'f230fh0g3',name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:'f230fh0g3',name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:'f230fh0g3',name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:'f230fh0g3',name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:'f230fh0g3',name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:'f230fh0g3',name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
      ]
  }
  ngOnInit(): void {
    this.getAllClient()
    this.getAllProduct()
  }


  showDialog() {
      this.visible = true;
  }
  hideDialog(){
    this.visible = false;
  }
  getAllClient(){
    this.Client.GetAllClient().pipe(
      map((values:any)=>{
        return values.data.map((value:any)=>{
          return {
            id:value.id,
            name:value.name
          }
        })
      })
    ).subscribe((data:any)=>{
     this.Client.AllClient=data
     console.log(data);
     
    })
  }
    getAllProduct(){
      this.product.GetAllProduct().pipe(
        map((values:any)=>{
          return values.data.map((value:any)=>{
            return {
              id:value.id,
              name:value.name
            }
          })
        })
      ).subscribe((data:any)=>{
        this.product.AllProduct=data
      })
    }
}