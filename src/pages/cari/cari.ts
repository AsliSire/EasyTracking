import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SiparisPage } from '../siparis/siparis';
/**
 * Generated class for the CariPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cari',
  templateUrl: 'cari.html',
})
export class CariPage {
  items: any;
  cariliste: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {   

  }
  initializeItems() {
    this.cariliste = [
      {
        "car_kod": "0010",
        "car_adi": "Microsoft",
        "car_bakiye": "22000.0",
      },
      {
        "car_kod": "0011",
        "car_adi": "Apple",
        "car_bakiye": "4584.0",
      },
      {
        "car_kod": "0012",
        "car_adi": "Samsung",
        "car_bakiye": "3894.0",
      },
      {
        "car_kod": "0013",
        "car_adi": "Lenovo",
        "car_bakiye": "9294.0",
      },
      {
        "car_kod": "0016",
        "car_adi": "AOC",
        "car_bakiye": "9744.0",
      }
    ];
    console.log(this.cariliste);
    console.log(this.items);
}

getItems(ev) {
   // Reset items back to all of the items
   this.initializeItems();

   // set val to the value of the ev target
   const val = ev.target.value;

   // if the value is an empty string don't filter the items
   if (val && val.trim() != '') {
    this.cariliste = this.cariliste.filter((v) => {

      if (v.car_adi.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
      v.car_kod.toLowerCase().indexOf(val.toLowerCase()) > -1) {
         return true;
        }
  
        return false;
      })
   }
 }

 Siparis(item){
  this.navCtrl.push(SiparisPage);
  localStorage.setItem("carihesap", item);
 }
}
