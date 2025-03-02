
import { Component } from '@angular/core';
import { ProductlistComponent } from "../../../features/components/productlist/productlist.component";

import { CategorysliderComponent } from "../../../features/components/categoryslider/categoryslider.component";
import { StaticsliderComponent } from "../../../features/components/staticslider/staticslider.component";

@Component({
  selector: 'app-home',
  imports: [ProductlistComponent, CategorysliderComponent, StaticsliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}

