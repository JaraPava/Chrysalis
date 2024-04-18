import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product/product.component';
import { ListComponent } from './products/list/list.component';

import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

