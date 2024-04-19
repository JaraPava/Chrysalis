import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  constructor() { }
  public products: Product[] = [
    {
      title:"Mens Cotton Jacket",
      price:55.99,
      description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category:"men's clothing",
      image:'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      rating:{
        rate: 4.7,
        count:500
      }
    },
    {
      title:"Mens Casual Slim Fit",
      price:15.99,
      description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category:"men's clothing",
      image:'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      rating:{
        rate: 2.1,
        count:430
      }
    },
    {
      title:"Mens Casual Slim Fit",
      price:15.99,
      description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category:"men's clothing",
      image:'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      rating:{
        rate: 2.1,
        count:430
      }
    }
  ];

  onNewProduct(product:Product):void{
    this.products.push(product);
  };

  onDeleteProduct(index:number):void{
    console.log({index})
    this.products.splice(index,1); //Indicamos que borraremos solamente un elemento que el que es igual al índice
  }
}
