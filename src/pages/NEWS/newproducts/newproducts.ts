// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';
import { UtilityService } from '../../../providers/utility-service';
import { InAppBrowser   } from 'ionic-native';


// COMPONENT
@Component( {
  selector    : 'page-newproducts',
  templateUrl : 'newproducts.html'
} )


// EXPORT
export class NewproductsPage {
  productNewList = null;
  productNewLista = null;

  constructor( public navCtrl : NavController, public navParams : NavParams, public ut : UtilityService ) {
    this.productNewList = ut.getNewProduct().sort(function(a,b) {return (a.productName > b.productName) ? 1 : ((b.productName > a.productName) ? -1 : 0);} );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewproductsPage');
  }

  openDataSheet(filename) {
    if(filename) {
      new InAppBrowser(`assets/pdf/newproducts/${filename}`, '_blank', 'location=no');
    }
  }
}