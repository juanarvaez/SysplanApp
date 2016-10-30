// import { Component } from '@angular/core';

// import { NavController } from 'ionic-angular';

// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {

//   constructor(public navCtrl: NavController) {
    
//   }

// }

import { Component, ViewChild, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
  @ViewChild("myCanvas") myCanvas
  @ViewChild("myHeader") myHeader
  
  context:CanvasRenderingContext2D
  base64Image: string;

  offsetX:number;
  offsetY:number;

  x:number;
  y:number;

  puntos = new Array(6);
  directores = new Array(4);
  i = 0;
  j = 1;

  constructor(public alertCtrl: AlertController) {}
  
  ngOnInit(){
    let canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext("2d");
    
    let h = this.myHeader.nativeElement;
    let rect = h.getBoundingClientRect();
    this.offsetX = rect.left;
    this.offsetY = rect.bottom;
  }

  takePicture() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  getCoordenadas(event) {
    if(this.j <= 3) {
        this.x = event.x;
        this.y = event.y;

        this.y = this.y - this.offsetY;
        this.x = this.x - this.offsetX;

        this.dibujarPunto(this.x-15, this.y-15);

        this.puntos[this.i] = this.x;
        this.puntos[this.i+=1] = this.y;

        this.i+=1;

        if(this.j == 2) { this.dibujarLinea(this.puntos[0], this.puntos[1], this.puntos[2], this.puntos[3]); }
        if(this.j == 3) { this.dibujarLinea(this.puntos[2], this.puntos[3], this.puntos[4], this.puntos[5]); }

        this.j+=1;
    }
    else { this.showAlert(); }
  }

  dibujarLinea(x1, y1, x2, y2) {
      this.context.moveTo(x1-15, y1-15);
      this.context.lineTo(x2-15, y2-15);
      this.context.strokeStyle = "#f00";
      this.context.stroke();
  }

  dibujarPunto(x, y) {
      this.context.fillStyle = "red";
      this.context.beginPath();
      this.context.arc(x, y, 5, 0, Math.PI*2, true);
      this.context.closePath();
      this.context.fill();
  }

  obtenerDirectores() {
      this.directores[0] = this.puntos[0] - this.puntos[2];
      this.directores[1] = this.puntos[1] - this.puntos[3];
      this.directores[2] = this.puntos[2] - this.puntos[4];
      this.directores[3] = this.puntos[3] - this.puntos[5];
  }

  calcularAngulo() {
      this.obtenerDirectores();
      var numerador = 0;
      var denominador = 0;
      var angulo = 0;

      numerador = this.directores[0] * this.directores[2] + this.directores[1] * this.directores[3];
      denominador = Math.sqrt(Math.pow(this.directores[0], 2) + Math.pow(this.directores[1], 2)) * Math.sqrt(Math.pow(this.directores[2], 2) + Math.pow(this.directores[3], 2));
      angulo = Math.acos(numerador/denominador);

      alert("El angulo es: " + angulo);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Advertencia!',
      subTitle: 'Ya has marcado los puntos necesarios!',
      buttons: ['OK']
    });
    alert.present();
  }

}