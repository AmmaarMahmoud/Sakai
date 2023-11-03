import { Component } from '@angular/core';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent {
  products!: any[];
  visible: boolean = false;

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


  showDialog() {
      this.visible = true;
  }
  hideDialog(){
    this.visible = false;
  }
}