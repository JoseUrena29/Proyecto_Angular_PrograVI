import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-get-products-clients',
  templateUrl: './get-products-clients.component.html',
  styleUrls: ['./get-products-clients.component.css']
})

export class GetProductsClientsComponent implements OnInit {
  listProductos: Products[] = [];
  categoriaFiltro: string = '';

  constructor(private _productoService: ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  filtrarProductosPorCategoria() {
    if (this.categoriaFiltro === '') {
      this.obtenerProductos();
    } else {
      this._productoService.filtrarProductos(this.categoriaFiltro).subscribe(
        data => {
          this.listProductos = data;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  limpiarFiltro() {
    this.categoriaFiltro = '';
    this.obtenerProductos();
  }

  formatDescription(descripcion: string): string[] {
    return this._productoService.formatDescription(descripcion);
  }
}
