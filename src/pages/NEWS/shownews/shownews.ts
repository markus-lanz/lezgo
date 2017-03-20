// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';
import { InAppBrowser   } from 'ionic-native';



// COMPONENT
@Component( {
  selector    : 'page-shownews',
  templateUrl : 'shownews.html'
} )


// EXPORT
export class ShowNewsPage {
  
  myDate = null;

  constructor( public navCtrl: NavController,
               public navParams: NavParams ) {
    this.myDate = new Date().toISOString();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  openPDF( pdfFile ) {
    new InAppBrowser(`assets/pdf/ecsshownews/${pdfFile}`, '_blank', 'location=no');
  }

}
