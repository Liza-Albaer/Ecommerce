import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators,ValidationErrors, AbstractControl } from '@angular/forms';
import { RegisterService } from '../../services/register/register.service';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { jwtDecode } from "jwt-decode";
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loading:boolean=false;
  errormessage!:string;
 userData!:any;
  loginform: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][A-Za-z0-9@/\-*]{5,9}$/)
    ]),

  });


constructor(private readonly loginService:LoginService,
  private readonly router:Router) {


}
submit(){
 if(this.loginform.valid){
  this.loading=true;
  this.loginService.postlogin(this.loginform.value).subscribe({
    next:(res)=>{
      localStorage.setItem('token',res.token);
      console.log(jwtDecode(res.token));
      this.userData=this.loginService.getuserdata(res.token);
      this.loading=false;
      this.router.navigate(['/home']);
      console.log(res)
    }
      ,
    error:(err)=>{
this.loading=false;
this.errormessage=err.error.message;
;

    }});


 }else{
  this.loginform.markAllAsTouched();
 }
}
}
