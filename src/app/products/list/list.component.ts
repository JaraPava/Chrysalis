import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public productNames: string[] = [
    'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    'Mens Casual Premium Slim Fit T-Shirts',
    'Mens Cotton Jacket',
    'Mens Casual Slim Fit'
  ]
}
