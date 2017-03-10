import { Component } from '@angular/core';
import { NavController, NavParams,ModalController, ViewController } from 'ionic-angular';
import{UtilityService} from '../../../providers/utility-service';
import {LiteratureSearchModalPage} from '../../literature-search-modal/literature-search-modal';
import { InAppBrowser   } from 'ionic-native';
/*
  Generated class for the TechnicalBroshures page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-technical-broshures',
  templateUrl: 'technical-broshures.html'
})
export class TechnicalBroshuresPage {


  techSearchBarData = null;
  tempLiterature = {
  'cattitle1': '',
  'cattitle2': '',
   'brochurecode': '',
  'brochuretitle': '',
    'file'  : ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public utService:UtilityService,public modalCtrl:ModalController, public viewCtrl: ViewController) {
  this.techSearchBarData = utService.getLiteraturDataFromXMl();
  }




literaturModel = [];
literaturSubCategory = [];

presentSearchTechModal(){
  let techModal = this.modalCtrl.create(LiteratureSearchModalPage);
  techModal.present();
  techModal.onDidDismiss(data =>{
  if(data){
  this.literaturModel = [];
  let _temp = [];

  this.tempLiterature.cattitle1 = data.cattitle1;
  this.tempLiterature.cattitle2 = data.cattitle2;
  this.tempLiterature.brochurecode = data.brochurecode;
  this.tempLiterature.brochuretitle = data.brochuretitle;
  this.tempLiterature.file = data.file;

  _temp = this.techSearchBarData.filter( (item) =>{
    return item.cattitle1 === this.tempLiterature.cattitle1;
  });

  for(let g in _temp) {
  console.log(_temp[g].cattitle1)
    const cat    = _temp[g].cattitle1;
    const subcat = _temp[g].cattitle2;
    const code    = _temp[g].brochurecode;
    const title   = _temp[g].brochuretitle;

    if(this.literaturModel.length > 0){
    const it = this.literaturModel.findIndex( (item) => item.subcatname === subcat) ;
     if(it === -1) {
       this.literaturModel.push({ subcatname : subcat , items : []});
     }

    }else{
      this.literaturModel.push({ subcatname : subcat, items : []});
    }
  };


  console.log(this.literaturModel);
   for(let ki in this.literaturModel ){

     const subcat = this.literaturModel[ki].subcatname;


     let array = _temp.filter((items) =>{
      return items.cattitle2 === subcat
     });
     console.log('Tttttttttttttttttttt');
//console.log(array)
    this.literaturModel[ki].items = array
   }
  console.log(this.literaturModel);


//  this.literaturModel.push(this.tempLiterature);
  }



  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad TechnicalBroshuresPage');
  }
  viewPdfOfSubCategory(file){
     new InAppBrowser(`assets/productfiles/${file}`, '_blank', 'location=no');
  }

  dismiss() {
    this.viewCtrl.dismiss(  );
  }
}
