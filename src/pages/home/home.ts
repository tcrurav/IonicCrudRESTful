import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Bicycle } from '../../models/bicycle';
import { BicycleCreatePage } from '../bicycle-create/bicycle-create';
import { BicycleUpdatePage } from '../bicycle-update/bicycle-update';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private bicycles: Array<Bicycle>;
  private errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider) { }

  ionViewDidLoad(){
    this.getBicycles();
  }

  getBicycles(): any {
    this.rest.getBicycles().subscribe(
      bicycles => this.bicycles = bicycles,
      error => this.errorMessage = error
    );
  }

  showBicycleById(bicycleId: number){
    this.getBicycleById(bicycleId);
  }

  getBicycleById(bicycleId: number): any {
    this.rest.getBicycleById(bicycleId).subscribe(
      (bicycle: Bicycle) => console.log(JSON.stringify(bicycle)),
      error => this.errorMessage = error
    );
  }

  createBicycle(){
    this.navCtrl.push(BicycleCreatePage, { "parentPage": this });
  }

  updateBicycle(bicycle: Bicycle){
    this.navCtrl.push(BicycleUpdatePage, { bicycle: bicycle, "parentPage": this });
  }

  deleteBicycleById(bicycleId: number){
    this.rest.deleteBicycleById(bicycleId).subscribe(
      data => this.bicycles.splice(
                this.bicycles.map(item => item.id).indexOf(bicycleId), 1),
      error => this.errorMessage = error
    );
  }
}
