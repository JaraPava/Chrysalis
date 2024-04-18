import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  public productNames: string[] = [
    'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    'Mens Casual Premium Slim Fit T-Shirts',
    'Mens Cotton Jacket',
    'Mens Casual Slim Fit'
  ];

  public deletedProductName?:string;

  ngOnInit(): void {

  }
  removeLastProduct():void{
    const deletedProduct = this.productNames.pop();
    this.deletedProductName = deletedProduct;
    // this.productNames.pop();//Regresa un string o undefined por que si no borra nada el undefined es su valor
  }
}
