import { Component,OnInit, } from '@angular/core';
import { Products } from '../products';
import {inject} from '@angular/core';
import { ProductsService } from '../products.service'; 
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
  @Component({
  selector: 'app-display-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-items.component.html',
  styleUrl: './display-items.component.css'
})
export class DisplayItemsComponent implements OnInit {
  productsList: Products[] = [];
  productsService: ProductsService = inject(ProductsService);
  
  constructor() {
    this.productsService.getData().then((productsList: Products[]) => {
      this.productsList = productsList;
      
    });
  }
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
}
