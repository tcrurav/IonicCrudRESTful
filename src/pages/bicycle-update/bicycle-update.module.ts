import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BicycleUpdatePage } from './bicycle-update';

@NgModule({
  declarations: [
    BicycleUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(BicycleUpdatePage),
  ],
})
export class BicycleUpdatePageModule {}
