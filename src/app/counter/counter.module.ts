import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


/**
 *  Esto es más que un agrupador y tendremos la
 *  definición de los componentes de counter, debemos invocar el decorador @NgModule
 */
@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ],

})

export class CounterModule{}

