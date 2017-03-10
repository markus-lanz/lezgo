import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import{UtilityService} from '../../providers/utility-service';
/*
  Generated class for the ProductSearchModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-search-modal',
  templateUrl: 'product-search-modal.html'
})
export class ProductSearchModalPage {
  productSearchBarData = null;
  selectedObject = {
  additive :'',
  size :'',
  id:''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public utService:UtilityService,
  public viewCtrl:ViewController) {
   this.productSearchBarData = utService.getProductsDataFromXMl();
   console.log(this.productSearchBarData)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductSearchModalPage');
  }
  getProductsSearchData(ev:any){
     this.productSearchBarData = this.utService.getProductsDataFromXMl();

    // set val to the Value of the searchbar
    let val = ev.target.value;
   console.log(val)
    // if the Value is an empty String don't filter the items
    if(val && val.trim() !=''){
      this.productSearchBarData = this.productSearchBarData.filter( (item) =>{
        return (item.additive.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  closeSearchbar(data){
  if(data){
  console.log(data)
    this.viewCtrl.dismiss(data);
  }else {
  const tempData = null;
  console.log(data)
    this.viewCtrl.dismiss(tempData);
  }


  }

}
