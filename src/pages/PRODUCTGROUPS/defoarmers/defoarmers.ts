// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';
import { InAppBrowser   } from 'ionic-native';



// COMPONENT
@Component( {
  selector    : 'page-defoarmers',
  templateUrl : 'defoarmers.html'
} )


// EXPORT
export class DefoarmersPage {

  constructor( public navCtrl: NavController,
               public navParams: NavParams ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefoarmersPage');
  }

  openPDF(){
    new InAppBrowser(`assets/pdf/productgroups/defoarmers/BYK_L-DI1_Defoamers_EN.pdf`, 'location=no');
  }

}
