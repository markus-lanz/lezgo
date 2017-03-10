/*
 Generated class for the Videomodal page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */


// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams,
         ViewController } from 'ionic-angular';


// COMPONENTS
@Component({
  selector    : 'page-videomodal',
  templateUrl : 'videomodal.html'
})


// EXPORTS
export class VideomodalPage {

  videoName = null;
  title     = '';

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
              public navParams: NavParams) {

    this.videoName = navParams.get( 'videoId' );
    this.title     = 'test';
  }

  ionViewDidLoad() {
    console.log( 'ionViewDidLoad VideomodalPage' );
  }


  dismiss(title) {
    this.viewCtrl.dismiss( title );
  }
}
