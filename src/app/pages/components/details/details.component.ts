import { CurrencyPipe } from '@angular/common';
import { Product, products } from './../../../shared/interface/product';
import { ProductdetailsService } from './../../services/productdetails/productdetails.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-details',
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
id:string="";
product!:products;
  constructor(private activatedRoute:ActivatedRoute,private readonly productdetailsService:ProductdetailsService) {


  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.getDetails(this.id);
    });
  }

  getDetails(id: string): void {
    this.productdetailsService.getproductdetails(id).subscribe({
      next: (res) => {
        this.product = res.data;
      },
      error: (err) => {
        console.error('Error fetching product details:', err); 
      },
    });
  }
}

