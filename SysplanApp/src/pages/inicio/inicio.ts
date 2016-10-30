import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {AyudaPage} from '../ayuda/ayuda';

@Component({
    selector: 'page-inicio',
    templateUrl: 'inicio.html'
 //templateUrl:'build/pages/inicio/inicio.html'
})
export class InicioPage {

    constructor(private nav:NavController) {

    }

    goToHome() {
        this.nav.push(HomePage);
    }

    goToHelp() {
        this.nav.push(AyudaPage);
    }
}