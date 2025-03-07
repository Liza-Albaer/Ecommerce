import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators,ValidationErrors, AbstractControl } from '@angular/forms';
import { ForgetpasswordService } from '../../services/forgetpassword/forgetpassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  imports: [ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {
  loading:boolean=false;
  errormessage!:string;
  step:number=0;

  constructor(private readonly forgetpasswordService:ForgetpasswordService,private readonly router:Router) {
  }
 forgetpasswordform: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email])

  });
  verifycodeform: FormGroup = new FormGroup({

    resetCode: new FormControl(null, [Validators.required, Validators.maxLength(6)])

  });
  resetpasswordform: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][A-Za-z0-9@/\-*]{5,9}$/)
    ]),

  });
  submitform1(){
    if(this.forgetpasswordform.valid){
      this.loading=true;

      this.forgetpasswordService.forgetPassword(this.forgetpasswordform.value).subscribe({
        next:(res)=>{
          this.step=1;
          this.loading=false;
        }
      });
    }

  }
  submitform2(){
    if(this.verifycodeform.valid){
      this.loading=true;

      this.forgetpasswordService.verifycode(this.verifycodeform.value).subscribe({
        next:(res)=>{
          this.step=2;
          this.loading=false;

          this.resetpasswordform.get('email')?.patchValue(this.forgetpasswordform.get('email')?.value);
        }
      });
    }

  }
  submitform3(){
if(this.resetpasswordform.valid){
  this.loading=true;
  this.forgetpasswordService.resetpassword(this.resetpasswordform.value).subscribe({
    next:(res)=>{

      this.loading=false;
      this.router.navigate(['/login']);
    }
  });
}
  }
}
