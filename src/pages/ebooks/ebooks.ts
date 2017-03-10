import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';
import { InAppBrowser   } from 'ionic-native';
import { UtilityService } from '../../providers/utility-service';
/*
  Generated class for the Ebooks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ebooks',
  templateUrl: 'ebooks.html'
})
export class EbooksPage {

  ebooksArray = null;
  activeEbookSegment = null;
  searchedEbook = {
    genre :''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams
   , public utilityService :UtilityService) {
    this.activeEbookSegment = "all";
    this.ebooksArray = utilityService.getEbooks();
      console.log(this.ebooksArray)
  }

  getBook(ev:any){
    this.ebooksArray = this.utilityService.getEbooks();
    //this.cFormService.initializeItems();
    // set val to the Value of the searchbar
    let val = ev.target.value;
    console.log(val)
    // if the Value is an empty String don't filter the items
    if(val && val.trim() !=''){
      this.ebooksArray = this.ebooksArray.filter( (item) =>{
        console.log(item.genre)
        return (item.genre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  ionViewDidLoad() {

  }

  openPdf(){
    //InAppBrowser.open('assets/ng-book.pdf','_system','location=yes');
    new InAppBrowser('assets/ng-book.pdf','_blank','location=no');

  }
}
