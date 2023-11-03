import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/demo/service/Users/user.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm!:FormGroup
  constructor(public layoutService: LayoutService ,private build : FormBuilder , private user: UserService , private route:Router) {
    this.myForm=this.build.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]]
    })
  }
 
  ngOnInit(): void {

  }
  get email(){
    return this.myForm.get('email')
  }
  get password(){
    return this.myForm.get('password')
  }

  onSubmit(){
    
    this.user.login(this.myForm.value).subscribe((data:any)=>{
      console.log(data);
      this.route.navigate(['/'] )
      localStorage.setItem('token',data.data.token)
    })
  }
}
