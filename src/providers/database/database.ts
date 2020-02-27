import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;
  constructor(public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform, private http: Http, private sqliteDbCopy: SqliteDbCopy) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'easytracking.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
              this.databaseReady.next(true);
            } else {
              this.fillDatabase();
            }
          });
        });
    }); 
  }
 
  fillDatabase() {
    this.http.get('assets/MobilSip.s3db')
      .map(res => res.text())
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
            console.log('database_filled');
          })
          .catch(e => console.error(e));
      });
  }

  GETCARI() {
    return this.database.executeSql("SELECT * FROM TBL_CARI", []).then((data) => {
      let cari = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          cari.push({ cr_adi: data.rows.item(i).CR_ADI, cr_kod: data.rows.item(i).CR_KOD, cr_bakiye: data.rows.item(i).CR_BAKIYE });
        }
      }
      return cari;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
}
