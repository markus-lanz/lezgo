// IMPORTS
import { Component,
         NgZone                 } from '@angular/core';
import { NavController,
         NavParams,
         ActionSheetController,
         ViewController,
         ToastController        } from 'ionic-angular';
import { CameraPreview,
         Camera                 } from 'ionic-native';


// COMPONENT
@Component({
  selector    : 'page-picmodal',
  templateUrl : 'picmodal.html'
})


// EXPORTS
export class PicmodalPage {

  public getWidth: number;
  public getHeight : number;
  public calcWidth : number;
  public calcHeight : number;

  picRes:any;

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               public actionsheetCtrl: ActionSheetController,
               public viewCtrl: ViewController,
               private zone:NgZone,
               public toastCtrl:ToastController ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PicmodalPage');

  }


  ooClick() {

    Camera.getPicture({
      quality            : 50,
      destinationType    : Camera.DestinationType.DATA_URL,
      sourceType         : Camera.PictureSourceType.CAMERA,
      targetWidth        : 200,
      targetHeight       : 200,
      saveToPhotoAlbum   : true,
      correctOrientation : true
    }).then((imageData) => {
    }, (err) => {
      console.log(err);
    });
  }


  stopCamera() {
    CameraPreview.stopCamera();
  }


  takePicture() {

    let size = {
      maxWidth  : 640,
      maxHeight : 640
    };
    CameraPreview.takePicture(size);

  }


  SwitchCamera() {
    CameraPreview.switchCamera();
  }


  showCamera() {
    CameraPreview.show();
  }


  hideCamera() {
    CameraPreview.hide();
  }


  switch() {
    CameraPreview.switchCamera();
  }


  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Cam Menu',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Start Cam',
          role: 'destructive',
          handler: () => {
            this.ooClick();
          }
        },
        {
          text: 'Take Picture',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'Switch Cam',
          handler: () => {
            this.SwitchCamera();
          }
        },
        {
          text: 'Stop Cam',
          handler: () => {
            this.stopCamera();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }


  dismiss(picData) {
    this.stopCamera();
    this.viewCtrl.dismiss(picData);
  }

}
