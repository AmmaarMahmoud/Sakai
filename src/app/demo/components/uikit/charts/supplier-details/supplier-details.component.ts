import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.scss']
})
export class SupplierDetailsComponent implements OnInit {

  AllClient:any

  constructor(){
    this.AllClient=[
      {
        name:114,
        products:[
          {
            price:500,
            prod:'فراخ',
            count:5
          },
          {
            price:600,
            prod:'لحم',
            count:10
          },
          {
            price:700,
            prod:'برسيل',
            count:10
          }
        ],
        total:8000,
        tax:15,
        totalwithTax:5000,
      }
    
    ]
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
