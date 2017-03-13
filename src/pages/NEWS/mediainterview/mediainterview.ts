// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';
import { InAppBrowser   } from 'ionic-native';



// COMPONENT
@Component( {
  selector    : 'page-mediainterview',
  templateUrl : 'mediainterview.html'
} )


// EXPORT
export class MediainterviewPage {

  constructor( public navCtrl: NavController,
               public navParams: NavParams ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediainterviewPage');
  }

  openDataSheet( filename ) {
    new InAppBrowser(`assets/pdf/mediainterviews/${filename}`, '_blank', 'location=no');
  }

}
