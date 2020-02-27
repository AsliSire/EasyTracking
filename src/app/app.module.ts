import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { SiparisPage } from '../pages/siparis/siparis';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SiparisSatiriPage } from '../pages/siparissatiri/siparissatiri';
import { GecmisPage } from '../pages/gecmis/gecmis';
import { DatabaseProvider } from '../providers/database/database';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
 
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    SiparisPage,    
    SiparisSatiriPage,
    GecmisPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    NgxDatatableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    SiparisPage,
    SiparisSatiriPage,
    GecmisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    SQLitePorter,
    SQLite,
    SqliteDbCopy
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
 
}
