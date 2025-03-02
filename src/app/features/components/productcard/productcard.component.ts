import { Component, Input } from '@angular/core';
import { products } from '../../../shared/interface/product';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../shared/services/cart/cart.service';


@Component({
  selector: 'app-productcard',
  imports: [TitleCasePipe,CurrencyPipe,RouterLink],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.scss'
})
export class ProductcardComponent {
  @Input() searchItem!:string;
@Input() items!:products;

constructor(private readonly cartService:CartService) {

}
ngOnChanges():void{
console.log(this.searchItem)
}
addtocart(id:string){
  const data={
    productId:id,
  }
this.cartService.addtocart(data).subscribe({
  next:(res)=>{

    console.log(res);
  },
  error:(err)=>{
console.log(err);
  }
})
}
}
