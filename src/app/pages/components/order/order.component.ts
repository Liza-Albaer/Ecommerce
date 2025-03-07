import { Data } from './../../../shared/interface/cart';
import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators,ValidationErrors, AbstractControl } from '@angular/forms';
import { OrderService } from '../../services/order/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order',
  imports: [ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
 loading:boolean=false;
  
id:string='';
constructor(
  private readonly orderService:OrderService,
  private readonly activatedRoute:ActivatedRoute,
  private toastr: ToastrService
,private readonly router:Router) {


}
ngOnInit(){
  this.id=this.activatedRoute.snapshot.params['id'];
}
  orderform: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),

    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/)
    ]),
    type:new FormControl('cash')
  });
  submit(){
    if(this.orderform.valid){
      const type=this.orderform.value.type;
      delete this.orderform.value.type;
      this.loading=true;
      const data={
        shippingAddress:this.orderform.value
      }

      if(type=='cash'){
        this.orderService.cashpayment(this.id,data).subscribe({
          next:(res)=>{
            console.log(res)
this.router.navigate(['/allorders'])
this.toastr.success('success')
            this.loading=false
          }

        })
      }else{
this.orderService.onlinepayment(this.id,data).subscribe({
  next:(res)=>{
    console.log(res.session.url)
    open(res.session.url,'_self')
    this.loading=false
  }

})
      }
     }else{
      this.orderform.markAllAsTouched();
      this.loading=false;
     }
 }
}
