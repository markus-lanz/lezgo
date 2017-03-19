// IMPORT
import { Component      } from '@angular/core';
import { NavController,
         NavParams,
         ViewController } from 'ionic-angular';
import { UtilityService } from '../../providers/utility-service';


// COMPONENT
@Component( {
  selector    : 'page-product-search-modal',
  templateUrl : 'product-search-modal.html'
} )


// EXPORT
export class ProductSearchModalPage {
  productSearchBarData = null;
  selectedObject = {
    additive : '',
    size     : '',
    id       : ''
  };

  constructor( public navCtrl   : NavController,
               public navParams : NavParams,
               public utService : UtilityService,
               public viewCtrl  : ViewController ) {

    this.productSearchBarData = utService.getProductsDataFromXMl();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductSearchModalPage');
  }


  getProductsSearchData(ev: any) {
    this.productSearchBarData = this.utService.getProductsDataFromXMl();

    // set val to the Value of the searchbar
    let val = ev.target.value;
    // if the Value is an empty String don't filter the items
    if (val && val.trim() != '') {
      this.productSearchBarData = this.productSearchBarData.filter((item) => {
        return (item.additive.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  closeSearchbar(data) {
    if (data) {
      this.viewCtrl.dismiss(data);
    } else {
      this.viewCtrl.dismiss(null);
    }
  }

}
