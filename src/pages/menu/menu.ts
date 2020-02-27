import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MenuPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  satisRoot = 'SatisPage'
  cariRoot = 'CariPage'
  veriRoot = 'VeriPage'
  ayarRoot = 'AyarPage'


  constructor(public navCtrl: NavController) {}

}
