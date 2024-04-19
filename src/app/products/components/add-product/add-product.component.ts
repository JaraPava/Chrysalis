
import { Component } from '@angular/core';
import { Product } from '../../../home/interfaces/product.interface';

@Component({
  selector: 'products-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {

  public product:Product = {
    title:'',
    price:0,
    category:'',
    description:'',
    image:'',
    rating:{
      count:0,
      rate:0
    }
  };

  emitProduct(){
    console.log(this.product)
  };
}
