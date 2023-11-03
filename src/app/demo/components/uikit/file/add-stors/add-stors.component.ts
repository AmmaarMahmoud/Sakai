import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/Products/product.service';

@Component({
  selector: 'app-add-stors',
  templateUrl: './add-stors.component.html',
  styleUrls: ['./add-stors.component.scss']
})
export class AddStorsComponent {
  MyForm!:FormGroup;
  constructor(private builder :FormBuilder,private products:ProductService,private route:Router){
    this.MyForm=this.builder.group({
      Name:['',[Validators.required]],
      Price:['',[Validators.required]],
      Tax:['',[Validators.required]],
      Type_tax:['',[Validators.required]],
      Unit:['',[Validators.required]],
      Count:['',[Validators.required]],
      Category_ID:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.displayProductToUpdate()
  }

get Name(){
  return this.MyForm.get('Name')
}
get Price(){
  return this.MyForm.get('Price')
}
get Tax(){
  return this.MyForm.get('Tax')
}
get Type_tax(){
  return this.MyForm.get('Type_tax')
}
get Unit(){
  return this.MyForm.get('Unit')
}
get Count(){
  return this.MyForm.get('Count')
}
get Category_ID(){
  return this.MyForm.get('Category_ID')
}
addProduct(item:Product){
  this.products.AddProduct(item).subscribe((data:any)=>{
    console.log(data);
    this.route.navigate(['uikit/stores'])
  })
}
onSubmit(){
  if(!this.products.OneUpdateProduct){
    const prod = new Product(
      0,
      this.Name?.value,
      this.Tax?.value,
      this.Type_tax?.value,
      this.Price?.value,
      this.Unit?.value,
      this.Count?.value,
      this.Category_ID?.value
      )
    this.addProduct(prod)
    console.log(prod);
  }
  else{
    this.UpdateOneProduct()
  }
  }
  UpdateOneProduct(){
    this.products.UpdateProduct(this.MyForm.value).subscribe((data)=>{
      console.log(data);
      this.products.OneUpdateProduct={}
      this.route.navigate(['uikit/stores'])
    })
  }

  displayProductToUpdate(){
    const prod = this.products.OneUpdateProduct
    if(prod){
      this.MyForm.patchValue({
        Name:prod.name,
        Price:prod.price,
        Tax:prod.tax,
        Type_tax:prod.type_tax,
        Unit:prod.unit,
        Count:prod.count,
        Category_ID:prod.category_ID
      })
    }
  }
}
