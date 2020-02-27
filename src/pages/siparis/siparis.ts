import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MyApp } from '../../app/app.component';
import { SiparisSatiriPage } from '../siparissatiri/siparissatiri';
import { GecmisPage } from '../gecmis/gecmis';
const now = Date.now();
/**
 * Generated class for the SiparisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-siparis',
  templateUrl: 'siparis.html',
})
export class SiparisPage{
  private siparis : FormGroup;
  public columns : any;
  public rows : any;
 
  tablestyle = 'bootstrap';
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private alertCtrl: AlertController, private app:MyApp) {
    this.siparis = this.formBuilder.group({
      sip_tarih: ['', Validators.required],
      sip_cari_hesap: [''],
      sip_sevk_adresi: [''],
      sip_bakiye: [''],
      sip_toplam: [''],
      sip_indirim: ['']
    });

    this.columns = [
      { prop: 'name' },
      { name: 'gender' },
      { name: 'age' }
    ];
  }

  ionViewDidLoad() {
    this.siparis.patchValue({
      sip_cari_hesap: localStorage.getItem("carihesap"),
      sip_tarih: this.app.formatDate(now)
    })
   
    this.rows = [
      {
        "name": "Ethel Price",
        "gender": "female",
        "age": 22
      },
      {
        "name": "Claudine Neal",
        "gender": "female",
        "age": 55
      },
      {
        "name": "Beryl Rice",
        "gender": "female",
        "age": 67
      },
      {
        "name": "Simon Grimm",
        "gender": "male",
        "age": 28
      }
    ];
  
  }

  Kayit() {
    console.log(this.siparis);
  }

getRowClass(row) {
    return row.gender == 'male' ? 'male-row' : 'female-row';
  }
 
  open(row) {
    let alert = this.alertCtrl.create({
      title: 'Row',
      message: `${row.name} is ${row.age} years old!`,
      buttons: ['OK']
    });
    alert.present();
  }
 
  //
  // Summary Functions
  //
  genderSummary(values) {
    let male = values.filter(val => val == 'male').length;
    let female = values.filter(val => val == 'female').length;
 
    return `${male} / ${female}`;
  }
 
  ageSummary(values) {
    return values.reduce((a, b) => a+b, 0) / values.length;
  }

  SatirEkle(){
    this.navCtrl.push(SiparisSatiriPage);
  }
  HesapDokumu(){
    this.navCtrl.push(GecmisPage);
  }
}
