import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:4000/api/Productos/';

  constructor(private http: HttpClient) { }

  //Metodo para Obtener Productos GET
  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }

  //Metodo para Eliminar Productos DELETE
  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  //Metodo para Crear Productos POST
  crearProducto(producto: Products): Observable<any> {
    return this.http.post(this.url, producto);
  }

  }
