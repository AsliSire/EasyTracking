import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
const now = Date.now();

/**
 * Generated class for the GecmisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gecmis',
  templateUrl: 'gecmis.html',
})
export class GecmisPage {
Accounts: any;
tar_baslangic: string;
tar_bitis: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private app: MyApp) {
    this.initializeItems();
    this.tar_baslangic = this.app.formatDate(now);
    this.tar_bitis = this.app.formatDate(now);
  }

  ionViewDidLoad() {}
  initializeItems() {
    this.Accounts = [
      {
        "faturaturu": "Alış Faturası",
        "tarih": "12/12/2020",
        "miktar": "22.0",
        "tip" : "alis"
      },
      {
        "faturaturu": "Satış Faturası",
        "tarih": "12/12/2020",
        "miktar": "35.0",
        "tip" : "satis"
      },
      {
        "faturaturu": "Alış İadesi Faturası",
        "tarih": "12/12/2020",
        "miktar": "122.0",
        "tip" : "satis"
      },
      {
        "faturaturu": "Alış Faturası",
        "tarih": "12/12/2020",
        "miktar": "26.0",
        "tip" : "alis"
      },
      {
        "faturaturu": "Proforma Alış Faturası",
        "tarih": "12/12/2020",
        "miktar": "216.0",
        "tip" : "alis"
      },
      {
        "faturaturu": "Satış Faturası",
        "tarih": "12/12/2020",
        "miktar": "27.0",
        "tip" : "satis"
      },
    ];
 
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
 
    // set val to the value of the ev target
    const val = ev.target.value;
 
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
     this.Accounts = this.Accounts.filter((v) => {
      if (v.tarih && val){
       if (v.tarih.toString().indexOf(val.toString()) > -1) {
          return true;
         }
   
         return false;
        }
       })
    }
  }

  Filtrele(){}
}

