// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams,
         ViewController } from 'ionic-angular';
import { UtilityService } from '../../providers/utility-service';


// COMPONENT
@Component({
  selector: 'page-unit-search-modal',
  templateUrl: 'unit-search-modal.html'
})


// EXPORT
export class UnitSearchModalPage {

  unitSearchBarData  = null;
  selectedUnitObject = null;

  constructor( public navCtrl   : NavController,
               public navParams : NavParams,
               public utService : UtilityService,
               public viewCtrl  : ViewController ) {

    this.selectedUnitObject = navParams.get( 'productName' ).toLowerCase();
    this.unitSearchBarData = utService.getProductsDataFromXMl().filter( (item) =>{
      return (item.additive.toLowerCase().indexOf( this.selectedUnitObject ) > -1 );
    });
  }


  getUnitsSearchData(ev:any){
     this.unitSearchBarData = this.utService.getProductsDataFromXMl();

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.unitSearchBarData = this.unitSearchBarData.filter((item) => {
        return (item.size.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  closeUnitSearchbar(data) {
    if (data) {
      this.viewCtrl.dismiss(data);
    } else {
      const tempData = null;
      this.viewCtrl.dismiss(tempData);
    }


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitSearchModalPage');
  }

}
