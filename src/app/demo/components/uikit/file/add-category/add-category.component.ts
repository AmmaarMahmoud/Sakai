import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/demo/api/category';
import { CategoryService } from 'src/app/demo/service/Categores/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  MyForm!:FormGroup;
  constructor(
    private builder :FormBuilder,
    private route:Router,
    private Category:CategoryService
    ){
    this.MyForm=this.builder.group({
      name:['',[Validators.required]],
    })
  }
  get name(){
    return this.MyForm.get('name')
  }

  onSubmit(){
    this.AddCategory()
  }
  AddCategory(){
    const Cat = new Category(0,this.name?.value)
    this.Category.AddCategory(Cat).subscribe((data:any)=>{
      console.log(data);
      this.route.navigate(['uikit/stores'])
    })
  }
}
