
import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../home/interfaces/product.interface';

@Component({
  selector: 'products-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {

  @Output()
  onNewProduct: EventEmitter<Product> = new EventEmitter; //Vamos emitir un product <T> es un generico, el cual podemos especificar el tipo de dato que fluye.
  //Así creamos la instancia de este emiso de evento

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
    if(this.product.title.length === 0) return
    this.onNewProduct.emit(this.product);
    this.product = {title:"", price:0, category:"", description:"", image:"", rating:{count:0, rate:0}}

  };
}
