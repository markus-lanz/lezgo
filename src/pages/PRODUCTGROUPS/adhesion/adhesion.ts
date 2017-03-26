// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';
import { InAppBrowser   } from 'ionic-native';


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

  openWebSite(url) {
    new InAppBrowser(url, '_blank', 'location=no');
    return false;
  }

}
