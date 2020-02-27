import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the SatisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-satis',
  templateUrl: 'satis.html',
})
export class SatisPage {
  developer = {};
  developers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,  private databaseprovider: DatabaseProvider) {
    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.loadDeveloperData();
      }
    })
  }
  
  loadDeveloperData() {
    this.databaseprovider.GETCARI().then(data => {
      this.developers = data;
    })
  }
  ionViewDidLoad() {
}
}
