import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

//ESTA UNA SIMPLE CLASE Y TIENE EXPORT POR SI SE QUIERE USAR POR OTRO LADO.
export class AppComponent {
  public title:string = 'Hola mundo';
  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  }
  decrease(value:number):void{
    this.counter -= 1;
  }
  reset():void{
    this.counter = 10;
  }
}
