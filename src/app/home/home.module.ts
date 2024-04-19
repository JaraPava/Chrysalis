import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ProductModule } from '../products/product.module';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    ProductModule
  ]
})
export class HomeModule { }
