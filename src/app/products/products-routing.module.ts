import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { InfoProductComponent } from './info-product/info-product.component';

import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  {path:'addproduct',component:AddProductComponent},
  {path:'editproduct/:id',component:EditProductComponent},
  {path:'infoproduct/:id',component:InfoProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
