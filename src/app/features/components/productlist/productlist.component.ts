import { Component, Input } from '@angular/core';
import { products } from '../../../shared/interface/product';
import { ProductsService } from '../../../shared/services/products/products.service';
import { ProductcardComponent } from "../productcard/productcard.component";
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../../shared/pipe/search/search.pipe';

@Component({
  selector: 'app-productlist',
  imports: [ProductcardComponent,FormsModule,SearchPipe],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {
  searchItem:string='';
  @Input() inhome!:boolean;
  constructor(public ProductsService:ProductsService) {


  }
  products!:products[];
  ngOnInit():void{
    this.getallproducts();
  }
  getallproducts(){
    this.ProductsService.getallproducts().subscribe({
      next:(res)=>{
        if(this.inhome){
          const uniqueProducts = res.data.filter(
            (product, index, self) =>
              index === self.findIndex((p) => p.title === product.title)
          );


          this.products = this.inhome ? uniqueProducts.slice(0, 10) : uniqueProducts;
        }else{
          this.products=res.data;
        }

      }
    })
  }
}
