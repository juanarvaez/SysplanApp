import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
//import { AyudaPage} from '../pages/ayuda/ayuda';
//import { AyudaTomarFotosPage } from '../pages/ayudaTomarFotos/ayudaTomarFotos';


@NgModule({
  declarations: [MyApp, HomePage, InicioPage/*, AyudaPage, AyudaTomarFotosPage*/],
  imports: [IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, InicioPage/*, AyudaPage, AyudaTomarFotosPage*/],
  providers: []
})
export class AppModule {}
