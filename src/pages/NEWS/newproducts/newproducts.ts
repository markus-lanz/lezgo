/*
 Generated class for the Newproducts page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */

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
  productNewList1 = null;

  constructor( public navCtrl : NavController, public navParams : NavParams, public ut : UtilityService ) {

    this.productNewList1 = [
      {
        productName : 'DISPERBYK-2062',
        file1       : 'TDS_DISPERBYK-2062_EN.pdf',
        file2       : 'SDS_DISPERBYK-2062_GB_en.pdf'
      },
      {
        productName : 'OPTIFLO-T 1010',
        file1       : 'TDS_OPTIFLO-T_1010_EN.pdf',
        file2       : 'SDS_OPTIFLO-T_1010_GB_en.pdf'
      },
      {
        productName : 'CERATIX 8561',
        file1       : 'TDS_CERATIX_8561_EN.pdf',
        file2       : 'SDS_CERATIX_8561_EU_en.pdf'
      },
      {
        productName : 'CERATIX 8563',
        file1       : 'TDS_CERATIX_8563_EN.pdf',
        file2       : 'SDS_CERATIX_8563_EU_en.pdf'
      },
      {
        productName : 'CERATIX 8566',
        file1       : 'TDS_CERATIX_8566_EN.pdf',
        file2       : 'SDS_CERATIX_8566_EU_en.pdf'
      },
      {
        productName : 'CERAFLOUR 955',
        file1       : 'TDS_CERAFLOUR_955_EN.pdf',
        file2       : 'SDS_CERAFLOUR_955_EU_en.pdf'
      },
      {
        productName : 'CERAFLOUR 958',
        file1       : 'TDS_CERAFLOUR_958_EN.pdf',
        file2       : 'SDS_CERAFLOUR_958_EU_en.pdf'
      },
      {
        productName : 'CERAFLOUR 959',
        file1       : 'TDS_CERAFLOUR_959_EN.pdf',
        file2       : 'SDS_CERAFLOUR_959_EU_en.pdf'
      },
      {
        productName : 'BYK-1788',
        file1       : 'TDS_BYK-1788_EN.pdf',
        file2       : 'SDS_BYK-1788_GB_en.pdf'
      },
      {
        productName : 'BYK-1789',
        file1       : 'TDS_BYK-1789_EN.pdf',
        file2       : 'SDS_BYK-1789_GB_en.pdf'
      },
      {
        productName : 'AQUACER 1013',
        file1        : 'TDS_AQUACER_1013_EN.pdf',
        file2        : 'SDS_AQUACER_1013_EU_en.pdf'
      },
      {
        productName : 'AQUACER 1039',
        file1        : 'TDS_AQUACER_1039_EN.pdf',
        file2        : 'SDS_AQUACER_1039_EU_en.pdf'
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewproductsPage');
  }

  openDataSheet(filename) {
    new InAppBrowser(`assets/productfiles/${filename}`, '_blank', 'location=no');

  }
}
