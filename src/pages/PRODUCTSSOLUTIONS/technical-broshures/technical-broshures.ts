// IMPORTS
import { Component                 } from '@angular/core';
import { NavController,
         NavParams,
         ModalController,
         ViewController            } from 'ionic-angular';
import { UtilityService            } from '../../../providers/utility-service';
import { LiteratureSearchModalPage } from '../../literature-search-modal/literature-search-modal';
import { InAppBrowser              } from 'ionic-native';


// COMPONENT
@Component( {
  selector    : 'page-technical-broshures',
  templateUrl : 'technical-broshures.html'
} )


// EXPORT
export class TechnicalBroshuresPage {

  literaturModel       = [];
  literaturSubCategory = [];
  techSearchBarData    = null;

  tempLiterature = {
    'cattitle1'     : '',
    'cattitle2'     : '',
    'brochurecode'  : '',
    'brochuretitle' : '',
    'file'          : ''
  };

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               public utService:UtilityService,
               public modalCtrl:ModalController,
               public viewCtrl: ViewController) {

    this.techSearchBarData = utService.getLiteraturDataFromXMl();
  }


  presentSearchTechModal(){
    let techModal = this.modalCtrl.create(LiteratureSearchModalPage);
    techModal.present();
    techModal.onDidDismiss( data =>{

      if (data) {

        this.literaturModel = [];

        this.tempLiterature.cattitle1     = data.cattitle1;
        this.tempLiterature.cattitle2     = data.cattitle2;
        this.tempLiterature.brochurecode  = data.brochurecode;
        this.tempLiterature.brochuretitle = data.brochuretitle;
        this.tempLiterature.file          = data.file;

        let _temp = this.techSearchBarData.filter((item) => {
          return item.cattitle1 === this.tempLiterature.cattitle1;
        });

        for (let g in _temp) {
          const subcat = _temp[g].cattitle2;

          if ( this.literaturModel.length > 0 ) {
            const it = this.literaturModel.findIndex((item) => item.subcatname === subcat);
            if (it === -1) {
              this.literaturModel.push( { subcatname: subcat, items: [] } );
            }

          } else {
            this.literaturModel.push( { subcatname: subcat, items: [] } );
          }
        };

        for ( let ki in this.literaturModel ) {

          const subcat = this.literaturModel[ki].subcatname;

          let array = _temp.filter( ( items ) => {
            return items.cattitle2 === subcat
          } );
          this.literaturModel[ki].items = array
        }
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
