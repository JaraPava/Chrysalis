import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ServiceProduct } from '../../products/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  constructor(public serviceProduct:ServiceProduct) {


   }

}
