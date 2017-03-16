// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';


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

}
