import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecargasPage } from '../recargas/recargas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  AbrirRecargas(){
    this.navCtrl.push(RecargasPage);
  }

}
