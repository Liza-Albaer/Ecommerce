
import { RegisterService } from '../../services/register/register.service';
import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators,ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  loading:boolean=false;
  errormessage!:string;

  registerform: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,

      Validators.pattern(/^[A-Z][A-Za-z0-9@/\-*]{5,9}$/)
    ]),
    //
    rePassword: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/)
    ])
  },this.passwordMatchValidator);

  passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('rePassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}
/**
 *
 */
constructor(private readonly registerService:RegisterService,
  private readonly router:Router) {


}
submit(){
 if(this.registerform.valid){
  this.loading=true;
  this.registerService.postregister(this.registerform.value).subscribe({
    next:(res)=>{
      this.loading=false;
      this.router.navigate(['/login']);
      console.log(res)
    }
      ,
    error:(err)=>{
this.loading=false;
this.errormessage=err.error.message;
;

    }});


 }else{
  this.registerform.markAllAsTouched();
 }
}
}
