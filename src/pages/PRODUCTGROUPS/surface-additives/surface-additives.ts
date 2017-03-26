// IMPORT
import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';
import { InAppBrowser   } from 'ionic-native';



// COMPONENT
@Component( {
  selector    : 'page-surface-additives',
  templateUrl : 'surface-additives.html'
} )


// EXPORT
export class SurfaceAdditivesPage {

  constructor( public navCtrl: NavController,
               public navParams: NavParams ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurfaceAdditivesPage');
  }

  openPDF(){
    new InAppBrowser(`assets/pdf/productgroups/surfaceadditives/BYK_L-SI1_Surface_EN.pdf`, '_blank', 'location=no');
  }
}
