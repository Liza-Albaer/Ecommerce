import { Categories } from './../../../shared/interface/categories';
import { Component, Input } from '@angular/core';
import { CategoriesService } from '../../../shared/services/categories/categories.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategorycardComponent } from "../../../features/components/categorycard/categorycard.component";

@Component({
  selector: 'app-categories',
  imports: [CarouselModule, CategorycardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  constructor(public CategoriesService:CategoriesService) {


  }
  category!:Categories[];
  ngOnInit():void{
    this.getallcategories();
  }
  getallcategories(){
    this.CategoriesService.getallcategories().subscribe({
      next:(res)=>{

          this.category=res.data;


      }
    })
  }
}
