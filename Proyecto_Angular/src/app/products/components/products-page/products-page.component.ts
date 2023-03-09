import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit{

  constructor(private productsService: ProductsService) {

  }

  products: any;

  ngOnInit() {
    this.productsService.getProducts().subscribe(
      (data: any) => {
        this.products = data;
        console.log(data);
      }
    )
  }




}
