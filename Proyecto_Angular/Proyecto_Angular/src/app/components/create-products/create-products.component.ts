import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  productoForm: FormGroup;
  titulo = "Crear productos";
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _productoService: ProductService,
              private aRouter: ActivatedRoute){ 
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregaProducto(){
    console.log(this.productoForm);

    const PRODUCTS: Products ={
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      descripcion: this.productoForm.get('descripcion')?.value,
      precio: this.productoForm.get('precio')?.value,
      imagen: this.productoForm.get('imagen')?.value,
    }

    if(this.id !== null){
      //Editar Producto
      this._productoService.editarProducto(this.id, PRODUCTS).subscribe(data => {
        this.toastr.info('El Producto fue actualizado con éxito!', 'Producto Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        //this.productoForm.reset();
      })

    } else {
      //Agregar Producto
      console.log(PRODUCTS);
      this._productoService.crearProducto(PRODUCTS).subscribe(data => {
        this.toastr.success('El Producto fue registrado con éxito!', 'Producto Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    }
  }

  esEditar(){

    if(this.id !== null){
      this.titulo = "Editar Producto";
      this._productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          descripcion: data.descripcion,
          precio: data.precio,
          imagen: data.imagen,
        })
      })
    }
  }
}
