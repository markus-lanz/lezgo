// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams,
         ViewController } from 'ionic-angular';
import { InAppBrowser   } from 'ionic-native';


// COMPONENT
@Component( {
  selector    : 'page-product-modals',
  templateUrl : 'product-modals.html'
} )


//EXPORT
export class ProductModalsPage {

  Data = null;


  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               public viewCtrl: ViewController ) {
    this.Data = navParams.get( 'data' );
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductModalsPage');
  }


  openProductPdf(file){
    new InAppBrowser(`assets/productfiles/${file}`,'_blank','location=no');

  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
