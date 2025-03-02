import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { cart } from '../../../shared/interface/cart';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
cart!:cart;
  constructor(private readonly cartService:CartService) {

  }
  ngOnInit(){
    this.getmycart();
  }
getmycart(){
this.cartService.getcart().subscribe({
  next:(res)=>{

 this.cart=res;
 console.log(this.cart)
  },
  error:(err)=>{
console.log(err)
  }
})
}
}
