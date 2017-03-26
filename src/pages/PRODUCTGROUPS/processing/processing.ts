// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';
import { InAppBrowser   } from 'ionic-native';



// COMPONENT
@Component( {
  selector    : 'page-processing',
  templateUrl : 'processing.html'
} )


// EXPORT
export class ProcessingPage {

  constructor( public navCtrl: NavController,
               public navParams: NavParams ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcessingPage');
  }

  openWebSite(url) {
    new InAppBrowser(url, '_blank', 'location=no');
    return false;
  }

}
