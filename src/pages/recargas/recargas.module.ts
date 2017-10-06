import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecargasPage } from './recargas';

@NgModule({
  declarations: [
    RecargasPage,
  ],
  imports: [
    IonicPageModule.forChild(RecargasPage),
  ],
  exports: [
    RecargasPage
  ]
})
export class RecargasPageModule {}
