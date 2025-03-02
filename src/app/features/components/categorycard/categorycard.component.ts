import { Component, Input } from '@angular/core';
import { Categories } from '../../../shared/interface/categories';

@Component({
  selector: 'app-categorycard',
  imports: [],
  templateUrl: './categorycard.component.html',
  styleUrl: './categorycard.component.scss'
})
export class CategorycardComponent {

@Input() categories!:Categories;
}
