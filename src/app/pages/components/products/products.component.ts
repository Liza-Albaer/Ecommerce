import { Component } from '@angular/core';
import { ProductlistComponent } from "../../../features/components/productlist/productlist.component";

@Component({
  selector: 'app-products',
  imports: [ProductlistComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
