// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';
import { InAppBrowser   } from 'ionic-native';



// COMPONENT
@Component( {
  selector    : 'page-viscosity',
  templateUrl : 'viscosity.html'
} )


// EXPORT
export class ViscosityPage {

  constructor( public navCtrl: NavController,
               public navParams: NavParams ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViscosityPage');
  }

  openPDF(){
    new InAppBrowser(`assets/pdf/productgroups/viscosity/BYK_PVC-TI1_ViscosityDepressants_EN.pdf`, '_blank', 'location=no');
  }


}
