import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the DataGlance page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-data-glance',
  templateUrl: 'data-glance.html'
})
export class DataGlancePage {

  //fromTab=false;

  constructor(public navCtrl:NavController, public navParams:NavParams) {
    //console.log(navParams.get('fromTab'))
    //this.fromTab = navParams.get('fromTab');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DataGlancePage');
  }



}

