import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the SiparissatiriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-siparissatiri',
  templateUrl: 'siparissatiri.html',
})
export class SiparisSatiriPage {
  siparissatiri: FormGroup;
     
  constructor(public navCtrl: NavController, private formBuilder: FormBuilder ,public navParams: NavParams) {
    this.siparissatiri = this.formBuilder.group({
      sis_stok: ['', Validators.required],
      sis_miktar: [''],
      sis_birim: [''],
      sis_fiyat: [''],
      sis_ara_toplam: [''],
      sis_indirim_orani: [''],
      sis_indirim_tutari: [''],
      sis_kdv_orani: [''],
      sis_kdv_tutari: [''],
      sis_toplam: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SiparissatiriPage');
  }

}
