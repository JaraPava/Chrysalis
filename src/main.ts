import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/*
  Este archivo es el punto de entrada en Angular
  Hay veces que se estara trabajando con AngularUniversal, AngularElectronic.
  Angular + otra tecnología nos permitira hacer aplicaciones de diferentes plataformas
*/

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
