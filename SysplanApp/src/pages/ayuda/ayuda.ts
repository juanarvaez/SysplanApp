import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AyudaTomarFotosPage } from '../ayudaTomarFotos/ayudaTomarFotos';


@Component({
    selector: 'page-ayuda',
    templateUrl: 'ayuda.html'
})
export class AyudaPage {
    constructor(private nav:NavController) {}

    goToAyudaTomarFotos() {
        //this.nav.push(AyudaTomarFotosPage);
    }
}