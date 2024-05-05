import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { ProductsComponent } from './page/products/products.component';
import { ProductPageComponent } from './page/product-page/product-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductPageComponent },

];
