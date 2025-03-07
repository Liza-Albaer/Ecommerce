import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { cart } from '../../../shared/interface/cart';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
cart!:cart|null;

  constructor(private readonly cartService:CartService,private toastr: ToastrService) {

  }
  ngOnInit(){
    this.getmycart();
  }
getmycart(){
this.cartService.getcart().subscribe({
  next:(res)=>{

 this.cart=res;
 console.log(this.cart)
  }
})
}
clearcart(){

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showDenyButton: true,
    confirmButtonText: "Yes, delete it!",
    denyButtonText: "No, cancel!",

  }).then((result) => {
    if (result.isConfirmed) {
      this.cartService.clearcartdata().subscribe({
        next:(res)=>{

    this.cart = null;
        }
      })
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });

  }
removeitem(id:string){
  Swal.fire({
    title: "Are you sure?",
    text: "Your product will be removed",
    icon: "warning",
    showDenyButton: true,
    confirmButtonText: "Yes, delete it!",
    denyButtonText: "No, cancel!",

  }).then((result) => {
    if (result.isConfirmed) {
      this.cartService.removeproduct(id).subscribe({
        next:(res)=>{

    this.cart=res;

        }
      })
      Swal.fire({
        title: "Removed!",
        text: "Your product has been removed.",
        icon: "success"
      });
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });

}
updatecount(id:string,count:number){
  const data={
    count:count.toString(),
  }
  this.cartService.updatetocart(data,id).subscribe({
    next:(res)=>{
      this.toastr.success('updated successfully', res.status)
console.log(res,'sssss')
this.cart=res;

    }
  })
}
}
