import { Component } from '@angular/core';
import { Product } from '../../../home/interfaces/product.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public productList: Product[] = [{
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    rating: {
      rate: 2.1,
      count: 430
    }
  }]
  // public deletedProductName?:string;

  // removeLastProduct():void{
  //   const deletedProduct = this.productNames.pop();
  //   this.deletedProductName = deletedProduct;
  //   // this.productNames.pop();//Regresa un string o undefined por que si no borra nada el undefined es su valor
  // }
}
