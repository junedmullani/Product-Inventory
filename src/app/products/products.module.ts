import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ReactiveFormsModule } from "@angular/forms";
import { InfoProductComponent } from './info-product/info-product.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { GraphComponent } from './graph/graph.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [ProductsComponent, AddProductComponent, EditProductComponent, InfoProductComponent, GraphComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,ReactiveFormsModule,Ng2SearchPipeModule,FormsModule,MatDialogModule,ChartsModule
  ]
})
export class ProductsModule { }
