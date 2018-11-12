import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Bicycle } from '../../models/bicycle';
import { RestProvider } from '../../providers/rest/rest';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-bicycle-create',
  templateUrl: 'bicycle-create.html',
})
export class BicycleCreatePage {

  bicycle: Bicycle = new Bicycle();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider, public toastCtrl: ToastController) {
  }

  save(form: NgForm){
    this.rest.createBicycle(form).subscribe(
      result => {
        this.navParams.get("parentPage").getBicycles(); //refresh parent page bicycle data
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }

}
