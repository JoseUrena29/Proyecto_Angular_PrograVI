import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetProductsComponent } from './components/get-products/get-products.component';
import { GetProductsClientsComponent } from './components/get-products-clients/get-products-clients.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { ViewProductDetailComponent } from './components/view-product-detail/view-product-detail.component';

const routes: Routes = [
  { path: '', component: GetProductsClientsComponent },
  { path: 'productos/:categoria', component: GetProductsComponent },
  { path: 'create-products', component: CreateProductsComponent },
  { path: 'edit-products/:id', component: CreateProductsComponent },
  { path: 'view-product-detail/:id', component: ViewProductDetailComponent },
  { path: 'get-products', component: GetProductsComponent }, // Nueva ruta para GetProductsClientsComponent
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
