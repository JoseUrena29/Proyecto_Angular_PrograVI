import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    // return this.http.get('https://api.escuelajs.co/api/v1/products');
    // return this.http.get('https://api.escuelajs.co/api/v1/products/?categoryId=2');
    return this.http.get('https://fakestoreapi.com/products');
  }
}