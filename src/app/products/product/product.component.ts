import { Component } from '@angular/core';

@Component({
  selector: 'app-products-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  title:string = "";
  price:number = 0;
  description:string = "";
  category:string = "";
  image:string = "";

}
