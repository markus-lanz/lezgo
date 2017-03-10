import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import{UtilityService} from '../../providers/utility-service';
/*
  Generated class for the UnitSearchModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-unit-search-modal',
  templateUrl: 'unit-search-modal.html'
})
export class UnitSearchModalPage {

unitSearchBarData = null;
selectedUnitObject = {
additive :'',
size :'',
id:''
};
  constructor(public navCtrl: NavController, public navParams: NavParams,public utService:UtilityService,
  public viewCtrl:ViewController) {
   this.unitSearchBarData = utService.getProductsDataFromXMl();
  }

  getUnitsSearchData(ev:any){
     this.unitSearchBarData = this.utService.getProductsDataFromXMl();

    // set val to the Value of the searchbar
    let val = ev.target.value;
   console.log(val)
    // if the Value is an empty String don't filter the items
    if(val && val.trim() !=''){
      this.unitSearchBarData = this.unitSearchBarData.filter( (item) =>{
        return (item.size.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  closeUnitSearchbar(data){
  if(data){
  console.log(data)
    this.viewCtrl.dismiss(data);
  }else {
  const tempData = null;
  console.log(data)
    this.viewCtrl.dismiss(tempData);
  }


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitSearchModalPage');
  }

}
