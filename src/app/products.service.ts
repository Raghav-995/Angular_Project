import { Injectable } from '@angular/core';
import { Products } from './products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
url ='https://fakestoreapi.com/products';
  constructor() { }
  async getData(): Promise<Products[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
  async getDataById(id: number): Promise<Products | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
}
