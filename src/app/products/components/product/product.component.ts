import { Component} from '@angular/core';

@Component({
  selector: 'app-products-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent{
  public title:string = "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops";
  public price:number = 109.95;
  public description:string = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday";
  public category:string = "men's clothing";
  public image:string = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";

  //Los getters son métodos que parece propiedad
  public capitalizedName():string{
    return this.title.toUpperCase();
  };

  getProductDescription():string{
    //Concatemamos con la interpolación el titulo y la descripción
    return `${this.title} - ${this.description}`
  };

  changeTitle():void{
    // //TODO:
    // throw 'Método no implementado' //Cuando se va a implementar un método pero aún no se implementado podemos poner este throw o un //TODO:

    this.title = "Producto 1"
  };

  changePrice():void{
    this.price = 100
  };

  resetForm():void{
    // this.title = "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops";
    this.price = 109.95;
    //Se puede agregar lenguaje javascript
    // document.querySelectorAll('h1').forEach(element =>{
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // });
  };

}
