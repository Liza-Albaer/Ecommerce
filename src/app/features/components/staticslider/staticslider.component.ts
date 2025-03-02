import { Component, Input } from '@angular/core';
import { CategoriesService } from '../../../shared/services/categories/categories.service';
import { Categories } from '../../../shared/interface/categories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-staticslider',
  imports: [CarouselModule],
  templateUrl: './staticslider.component.html',
  styleUrl: './staticslider.component.scss'
})
export class StaticsliderComponent {
@Input() inhome!:boolean;
  constructor(public CategoriesService:CategoriesService) {


  }
  category!:Categories[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplaySpeed:500,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  ngOnInit():void{
    this.getallcategories();
  }
  getallcategories(){
    this.CategoriesService.getallcategories().subscribe({
      next:(res)=>{
        if(this.inhome){
          this.category=res.data.slice(0,8);
        }else{
          this.category=res.data;
        }

      },error:(err)=>{
        console.log(err);
      }
    })
  }
}
