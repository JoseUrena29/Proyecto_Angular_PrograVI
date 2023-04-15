import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/models/product';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  productoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService){ 
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    
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

    console.log(PRODUCTS);
    this.toastr.success('El Producto fue registrado con éxito!', 'Producto Registrado!');
    this.router.navigate(['/']);
  }
}
