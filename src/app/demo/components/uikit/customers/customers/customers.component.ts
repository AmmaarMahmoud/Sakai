import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  products!: any[];


  constructor(private route : Router) {
      this.products =[
          {code:1,name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:2,name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:1,name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:4,name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:7,name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:10,name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:5,name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:2,name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
          {code:9,name:'Bamboo Watch',category:'Accessories',quantity:24,startdate:'1/1/2001',enddate:'1/1/2023',price:4000},
      ]
  }
  ngOnInit(): void {
      
  }
  CustomerDetails(id:number){
    this.route.navigate(['uikit/customers/details',id])
  }
}
