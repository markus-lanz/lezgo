import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import{UtilityService} from '../../providers/utility-service';
/*
  Generated class for the LiteratureSearchModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-literature-search-modal',
  templateUrl: 'literature-search-modal.html'
})
export class LiteratureSearchModalPage {
litSearchBarData = null;
  selectedLitObject = {
      cattitle1 :'',
      cattitle2 :'',
      brochurecode:'',
      brochuretitle:'',
      file:''
      };
  constructor(public navCtrl: NavController, public navParams: NavParams, public utService:UtilityService,
  public viewCtrl:ViewController) {


    this.litSearchBarData = utService.getLiteraturDataFromXMl();
    console.log(this.litSearchBarData)
  }

  getLitSearchData(ev:any){
     this.litSearchBarData = this.utService.getLiteraturDataFromXMl();

    // set val to the Value of the searchbar
    let val = ev.target.value;
   console.log(val)
    // if the Value is an empty String don't filter the items
    if(val && val.trim() !=''){
      this.litSearchBarData = this.litSearchBarData.filter( (item) =>{
        return (item.cattitle1.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  closeLitSearchbar(data){
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
    console.log('ionViewDidLoad LiteratureSearchModalPage');
  }

}
