import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Products } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-product-detail',
  templateUrl: './view-product-detail.component.html',
  styleUrls: ['./view-product-detail.component.css']
})
export class ViewProductDetailComponent implements OnInit {
  product: Products = {} as Products;
  videoUrl: SafeResourceUrl = '';

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.verDetalleProducto();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  verDetalleProducto(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id !== null) {
      this.productService.obtenerProducto(id).subscribe((product) => {
        this.product = product;
        if (this.product.video) {
          this.videoUrl = this.getSafeUrl(this.product.video);
        }
      }, error => {
        console.error(error);
        this.router.navigate(['/view-product-detail']);
      });
    }
  }
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
