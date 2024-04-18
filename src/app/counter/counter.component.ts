import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{title}}</h1>
    <hr>
    <p>Bienvenidos a la página de Chrysalis</p>
    <h3>Counter:{{counter}} </h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="decrease(-1)">-1</button>
  `
})

export class CounterComponent implements OnInit {
  counter:number = 10;
  title:string = 'Ganancias amigo mío, ganancias ...';
  constructor(){}
  ngOnInit() { }
  increaseBy(value:number):void{
    this.counter += 1;
  }

  decrease(value:number):void{
    this.counter -= 1
  }

  reset():void{
    this.counter = 10;
  }
}
