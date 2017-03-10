import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';
/*
  Generated class for the ProductModals page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-modals',
  templateUrl: 'product-modals.html'
})
export class ProductModalsPage {


  Data = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.Data = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductModalsPage');
  }
  openProductPdf(file){
    console.log(file);
    const name = 'ng-book.pdf';
    //InAppBrowser.open('assets/ng-book.pdf','_system','location=yes');
    new InAppBrowser(`assets/productfiles/${file}`,'_blank','location=no');

  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
