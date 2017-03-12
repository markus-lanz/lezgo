// IMPORTS
import { Component         } from '@angular/core';
import { NavController,
         NavParams,
         ModalController   } from 'ionic-angular';
import { UtilityService    } from '../../providers/utility-service';
import { ProductModalsPage } from '../product-modals/product-modals';
import { InAppBrowser      } from 'ionic-native';



// COMPONENT
@Component({
  selector    : 'page-product-ov-details',
  templateUrl : 'product-ov-details.html'
})



// EXPORT
export class ProductOVDetailsPage {
  pageTitle =  null;
  productA  = null;
  productB  = null;
  productC  = null;
  productD  = null;
  productF  = null;
  productG  = null;
  productH  = null;
  productL  = null;
  productM  = null;
  productN  = null;
  productO  = null;
  productR  = null;
  productS  = null;
  productT  = null;
  productV  = null;
  category  =  null;
  categoryData = null;
  productCategoryDetails = null;
  searchedProduct = {
    product :''
  };
  productFamName = null;


  constructor(public navCtrl: NavController, public navParams: NavParams,public ut:UtilityService,public modalCtrl:ModalController) {
    this.pageTitle = navParams.get('famName');
    this.category = navParams.get('cat');
    this.productFamName = navParams.get('famName');
    this.productCategoryDetails = ut.getResultArray();

    this.productA = this.productCategoryDetails['A'];
    this.productB = this.productCategoryDetails['B'];
    this.productC = this.productCategoryDetails['C'];
    this.productD = this.productCategoryDetails['D'];
    this.productF = this.productCategoryDetails['F'];
    this.productG = this.productCategoryDetails['G'];
    this.productH = this.productCategoryDetails['H'];
    this.productL = this.productCategoryDetails['L'];
    this.productM = this.productCategoryDetails['M'];
    this.productN = this.productCategoryDetails['N'];
    this.productO = this.productCategoryDetails['O'];
    this.productR = this.productCategoryDetails['R'];
    this.productS = this.productCategoryDetails['S'];
    this.productT = this.productCategoryDetails['T'];
    this.productV = this.productCategoryDetails['V'];

    this.getProductCategory(this.category,this.productFamName);
  }


  getProductCategory = (cat:string,famName:string) =>{
    switch(cat){
      case "A":
       return this.categoryData = this.productA.filter( (item) => item.famName === famName);
      case "B":
        return this.categoryData = this.productB.filter( (item) => item.famName === famName);
      case "C":
        return this.categoryData = this.productC.filter( (item) => item.famName === famName);
      case "D":
        return this.categoryData = this.productD.filter( (item) => item.famName === famName);
      case "F":
        return this.categoryData = this.productF.filter( (item) => item.famName === famName);
      case "G":
        return this.categoryData = this.productG.filter( (item) => item.famName === famName);
      case "H":
        return this.categoryData = this.productH.filter( (item) => item.famName === famName);
      case "L":
        return this.categoryData = this.productL.filter( (item) => item.famName === famName);
      case "M":
        return this.categoryData = this.productM.filter( (item) => item.famName === famName);
      case "N":
        return this.categoryData = this.productN.filter( (item) => item.famName === famName);
      case "O":
        return this.categoryData = this.productO.filter( (item) => item.famName === famName);
      case "R":
        return this.categoryData = this.productR.filter( (item) => item.famName === famName);
      case "S":
        return this.categoryData = this.productS.filter( (item) => item.famName === famName);
      case "T":
        return this.categoryData = this.productT.filter( (item) => item.famName === famName);
      case "V":
        return this.categoryData = this.productV.filter( (item) => item.famName === famName);

    }
  }


  openDetails(item){
      let productModal = this.modalCtrl.create(ProductModalsPage,{"data": item});
    productModal.present();
  }


  getProductsList(ev:any){
    this.categoryData = this.getProductCategory(this.category,this.productFamName);
    //this.cFormService.initializeItems();
    // set val to the Value of the searchbar
    let val = ev.target.value;
    console.log(val)
    // if the Value is an empty String don't filter the items
    if(val && val.trim() !=''){
      this.categoryData = this.categoryData.filter( (item) =>{
        console.log(item.product)
        return (item.product.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  openProductPdf(file){
    console.log(file);
    const name = 'ng-book.pdf';
    //InAppBrowser.open('assets/ng-book.pdf','_system','location=yes');
    new InAppBrowser(`assets/productfiles/${file}`,'_blank','location=no');

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductOVDetailsPage');
  }

}
