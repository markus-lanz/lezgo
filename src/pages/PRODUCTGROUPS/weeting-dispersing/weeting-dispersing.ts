// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';
import { InAppBrowser   } from 'ionic-native';



// COMPONENT
@Component( {
  selector    : 'page-weeting-dispersing',
  templateUrl : 'weeting-dispersing.html'
} )


// EXPORT
export class WeetingDispersingPage {

  constructor( public navCtrl: NavController,
               public navParams: NavParams ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeetingDispersingPage');
  }

  openLink(){
    new InAppBrowser(`https://ebooks.byk.com/`, '_blank', 'location=no');
  }

}
