// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
             NavParams  } from 'ionic-angular';


// COMPONENT
@Component( {
  selector    : 'page-rheology-additives',
  templateUrl : 'rheology-additives.html'
} )


// EXPORT
export class RheologyAdditivesPage {

  constructor( public navCtrl: NavController,
               public navParams: NavParams ) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad RheologyAdditivesPage');
  }

}
