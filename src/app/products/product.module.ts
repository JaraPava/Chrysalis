import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./components/list/list.component";
import { ProductComponent } from "./components/product/product.component";

@NgModule({
  declarations:[
    ListComponent,
    ProductComponent,
  ],
  exports:[
    ListComponent,
    ProductComponent
  ],
  imports:[
    CommonModule
  ]
})
export class ProductModule{}
