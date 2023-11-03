import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  products!: any[];


  constructor() {
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
    
  }
}
