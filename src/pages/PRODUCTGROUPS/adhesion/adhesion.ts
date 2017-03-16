// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';

// COMPONENT
@Component( {
  selector    : 'page-adhesion',
  templateUrl : 'adhesion.html'
} )


// EXPORT
export class AdhesionPage {

  constructor( public navCtrl: NavController,
               public navParams: NavParams ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdhesionPage');
  }

}
