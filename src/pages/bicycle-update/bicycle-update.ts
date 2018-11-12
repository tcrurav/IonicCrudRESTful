import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bicycle } from '../../models/bicycle';
import { NgForm } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-bicycle-update',
  templateUrl: 'bicycle-update.html',
})
export class BicycleUpdatePage {

  bicycle: Bicycle = new Bicycle();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider) { 
    this.bicycle = this.navParams.get('bicycle');
  }

  save(form: NgForm){
    this.rest.updateBicycle(form, this.bicycle.id).subscribe(
      result => {
        this.navParams.get("parentPage").getBicycles(); //refresh parent page bicycle data
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }
}
