import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BicycleCreatePage } from './bicycle-create';

@NgModule({
  declarations: [
    BicycleCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(BicycleCreatePage),
  ],
})
export class BicycleCreatePageModule {}
