import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetProductsComponent } from './components/get-products/get-products.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';

const routes: Routes = [
  {path: '', component: GetProductsComponent},
  {path: 'create-products', component: CreateProductsComponent},
  {path: 'edit-products/:id', component: CreateProductsComponent},
  {path: '**', redirectTo: '',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
