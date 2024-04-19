import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./components/list/list.component";
import { ProductComponent } from "./components/product/product.component";
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations:[
    ListComponent,
    ProductComponent,
    AddProductComponent
  ],
  exports:[
    ListComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ]
})
export class ProductModule{}

