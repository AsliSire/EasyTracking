import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GecmisPage } from './gecmis';

@NgModule({
  declarations: [
    GecmisPage,
  ],
  imports: [
    IonicPageModule.forChild(GecmisPage),
  ],
})
export class GecmisPageModule {}
