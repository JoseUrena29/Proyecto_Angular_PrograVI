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

  //Metodo para Editar Productos GET/PUT
  obtenerProducto(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarProducto(id: string, producto: Products): Observable<any> {
    return this.http.put(this.url + id, producto);
  }

  //Metodo para Filtrar Productos POST
  filtrarProductos(categoria: string): Observable<Products[]> {
    const filtro = { categoria: categoria.toLowerCase() };
    return this.http.post<Products[]>(`${this.url}/Productos/${categoria}`, filtro);
  }

  formatDescription(descripcion: string): string[] {
    return descripcion.split(', ');
  }

}
