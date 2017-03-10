/*
 Generated class for the Picmodal page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */


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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public actionsheetCtrl: ActionSheetController,public viewCtrl: ViewController,private zone:NgZone,public toastCtrl:ToastController) {





  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PicmodalPage');

  }


    ooClick() {

      Camera.getPicture({
        quality:50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        targetWidth: 200,
        targetHeight: 200,
        saveToPhotoAlbum: true,
        correctOrientation: true
      }).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        //this.picRes = base64Image;
      //  (<HTMLImageElement>document.getElementById('pics')).src = base64Image;
      }, (err) => {
        console.log(err);
      });


      /*


      let cameraRect:CameraPreviewRect = {
        x: 44,
        y: 100,
        width: this.calcWidth,
        height: 200
      };
      CameraPreview.startCamera(
        cameraRect, // position and size of preview
        'back', // default camera
        true, // tap to take picture
        false, // disable drag
        false, // keep preview in front. Set to true (back of the screen) to apply overlaying elements
        1 // set the preview alpha
      );
*/
    }

  stopCamera(){
    CameraPreview.stopCamera();
  }

  takePicture(){

    let size = { maxWidth:640,
      maxHeight: 640};
    CameraPreview.takePicture(size);

  }

  SwitchCamera(){
    CameraPreview.switchCamera();
  }
  showCamera(){
    CameraPreview.show();
  }
  hideCamera(){
    CameraPreview.hide();
  }

  switch(){
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
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  dismiss(picData){
    this.stopCamera();
    this.viewCtrl.dismiss(picData);
  }

}
