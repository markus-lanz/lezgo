import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the Productsgroups page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-productsgroups',
  templateUrl: 'productsgroups.html'
})
export class ProductsgroupsPage {

  Step = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Step ="step1";
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsgroupsPage');
  }

}
