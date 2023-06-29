import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/Models/Product/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

 async getProducts() {

    return this.http.get<Product[]>('https://localhost:44373/api/Products');
  }

  }
