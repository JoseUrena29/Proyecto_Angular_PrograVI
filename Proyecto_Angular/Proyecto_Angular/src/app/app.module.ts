import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { GetProductsComponent } from './components/get-products/get-products.component';
import { GetProductsClientsComponent } from './components/get-products-clients/get-products-clients.component';
import { ViewProductDetailComponent } from './components/view-product-detail/view-product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateProductsComponent,
    GetProductsComponent,
    GetProductsClientsComponent,
    ViewProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // Animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
