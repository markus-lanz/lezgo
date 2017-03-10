/*
 Generated class for the Videos page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */


// IMPORTS
import { Component                 } from '@angular/core';
import { NavController,
         NavParams,ModalController } from 'ionic-angular';
import { VideomodalPage            } from '../../videomodal/videomodal';


// COMPONENT
@Component( {
  selector    : 'page-videos',
  templateUrl : 'videos.html'
} )



// EXPORT
export class VideosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public modalCtrl:ModalController) {}

  ionViewDidLoad() {
    console.log( 'ionViewDidLoad VideosPage' );
  }

  // dispaly Video
  presentVideoModal( name ){
    let videoModal = this.modalCtrl.create( VideomodalPage, { videoId : name } );
    videoModal.present();

    videoModal.onDidDismiss(data =>{
      console.log( data );
    });
  }
}
