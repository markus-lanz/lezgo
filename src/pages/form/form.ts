import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,ViewController,ModalController,ToastController} from 'ionic-angular';
import {ContentForm} from '../../providers/content-form';
import{UtilityService} from '../../providers/utility-service';
import {Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {PicmodalPage} from '../picmodal/picmodal';
import{ProductSearchModalPage} from '../product-search-modal/product-search-modal';
import{UnitSearchModalPage} from '../unit-search-modal/unit-search-modal';
import {Camera} from 'ionic-native';
import {LiteratureSearchModalPage} from '../literature-search-modal/literature-search-modal';
import { InAppBrowser ,AppAvailability, Device  } from 'ionic-native';

/*
  Generated class for the Form page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {
  wizzardStep:string = null;



 myForm;
 activitiesObject ={};
  tempOrderProduct = {
  'product':''
  }
  tempOrderUnit ={
  'unit':''
  }
  tempLiterature = {
  'cattitle1': '',
  'cattitle2': '',
   'brochurecode': '',
  'brochuretitle': '',
    'file'  : ''
  }

  contentFromModel= null;

  contentFromService =  null;
 //ordersObject = {};
  literaturObject = {};
  authorObject = {};
  units= null;
  products = null;
  authors = null;
  from :any;
  to:any;
  endUseArray = null;
  productGroupArray = null;
  customerRolleArray = null;
  classificationArray = null;
  productSearchBarData = null;
  litSearchBarData = [];
  literaData = null;
  literawithoutDu = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,
                public alertCtrl : AlertController, public cFormService:ContentForm,private formBuilder: FormBuilder,
  public viewCtrl: ViewController,public modalCtrl:ModalController,public toastCtrl:ToastController,
  public utService:UtilityService) {

    this.contentFromService = cFormService;
    this.wizzardStep = cFormService.getWizzardStep();
    this.contentFromModel = cFormService.getNewContentFormModel();
    this.activitiesObject = cFormService.getNewRequiredAction();
  //  this.ordersObject = cFormService.getNewOrder();
    this.products = cFormService.getProductsData();
    this.units= cFormService.getUnits();
    this.literaturObject = cFormService.getNewLiteratur();
    this.authors = cFormService.getAuthorName();
    console.log('Hello ContentForm Provider');
    console.log(this.wizzardStep);
    this.from = navParams.data.from;
    this.to = navParams.data.to;
    this.endUseArray = cFormService.getEndUseArray();
   this.customerRolleArray = cFormService.getCustomerRolle();
   this.classificationArray = cFormService.getClassificationArray();
   this.productGroupArray = cFormService.getProductGroupArray();
   this.productSearchBarData = utService.getProductsDataFromXMl();
    //this.ordersObject.product = 'data.additive;'
  this.literaData = utService.getLiteraturDataFromXMl();
  this.litSearchBarData =utService.getLiteraturDataFromXMl();


  }
     checked = {};
    _selectedProductGroup = null;

    onChange(change){
     if(change ==='mr'){
       this.contentFromModel.Mrs = false;
     }
       else if(change === 'mrs'){
       this.contentFromModel.Mr = false;
     }
  }

    onChangeCRMRECORD(change){

     if(change ==='yes'){
       this.contentFromModel.CRM_RECORD.NO = false;
     }
       else if(change === 'no'){
       this.contentFromModel.CRM_RECORD.YES = false;
     }
  }

    onChangeProductGroup(checked,position, items, title):any{
    console.log(position)
      console.log(title)
    items.filter((des,index) =>{

    if(position != index){
     if(checked === true){
     des.checked = false;
     this.contentFromModel.ProductGroup = title;
     } else {
      this.contentFromModel.ProductGroup = '';
     }

    }
    });

    }
    onChangeEndUse(checked,position, items, title):any{
    items.filter((des,index) =>{
    if(position != index){
    if(checked === true){
    des.checked = false;
    this.contentFromModel.EndUse = title;
    } else {
      this.contentFromModel.EndUse  = '';
    }

    }
    });

    }
    onChangeClassification(checked,position, items, title):any{
    items.filter((des,index) =>{
    if(position != index){
    if(checked === true){
    des.checked = false;
    this.contentFromModel.Classification = title;
    } else{
    this.contentFromModel.Classification = '';
    }

    }
    });

    }

  onChangelitCatego(checked,position, items, title):any{
  items.filter((des,index) =>{
  if(position != index){

  des.checked = false;


  }
  });
  }


    onChangeCustomerRolle(checked,position, items, title):any{
    console.log(position)
    console.log(title)
    console.log(checked)
    items.filter((des,index) =>{
    if(position != index){
      if(checked === true){
      des.checked = false;
      this.contentFromModel.CustomerRolle = title;
      } else{
        this.contentFromModel.CustomerRolle = '';
      }

    }
    });

    }


setAuthorEmail(){
 let authemail = this.authors.filter((item) => item.name === this.contentFromModel.authorName);
  this.contentFromModel.authorEmail = authemail[0].email;
}

// dispaly picViewer
  pic = null;
/*
  presentPicModal(){
    let picModal = this.modalCtrl.create(PicmodalPage);
    picModal.present();
    picModal.onDidDismiss(data =>{
    console.log(data);
      (<HTMLImageElement>document.getElementById('bsCard')).src = data.src1;
        this.cFormService.setPicAtt(data.src2);
    //   this.pic = data;
    });
  }*/

  // SearchProduct Modal
  presentSearchProductsModal(){
    let proModal = this.modalCtrl.create(ProductSearchModalPage);
    proModal.present();
    proModal.onDidDismiss(data =>{
    if(data){
    this.tempOrderProduct.product = data.additive;
    }

    });
  }
  // SearchUnit Modal
  presentSearchUnitsModal(){
    let unitModal = this.modalCtrl.create(UnitSearchModalPage,{productName:this.tempOrderProduct.product});
    unitModal.present();
    unitModal.onDidDismiss(data =>{
    if(data){
    this.tempOrderUnit.unit = data.size;
    }

    });
  }


  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string) {
  	let app: string;
  	if (Device.platform === 'iOS') {
  		app = iosSchemaName;
  	} else if (Device.platform === 'Android') {
  		app = androidPackageName;
  	} else {
  		let browser = new InAppBrowser(httpUrl, '_system');
  		return;
  	}

  	AppAvailability.check(app).then(
  		() => { // success callback
  			let browser = new InAppBrowser(appUrl,'_system');
  		},
  		() => { // error callback
  			let browser = new InAppBrowser(httpUrl,'_system');
  		}
  	);
  }



  openExternalApp(){
   this.launchExternalApp('io.ionic.starter://', 'com.instagram.android', 'io.ionic.starter://', 'https://www.google.com/');
  }

literaturModel = [];
literaturSubCategory = [];
selectedRow = null;  // initialize our variable to null

presentSearchLitModal(data,index){
//  let literModal = this.modalCtrl.create(LiteratureSearchModalPage);
//  literModal.present();
//  literModal.onDidDismiss(data =>{

console.log(data)
  if(data){
  this.literaturModel = [];
  let _temp = [];
  console.log(index)
  this.selectedRow = index;
  this.tempLiterature.cattitle1 = data.cattitle1;
  this.tempLiterature.cattitle2 = data.cattitle2;
  this.tempLiterature.brochurecode = data.brochurecode;
  this.tempLiterature.brochuretitle = data.brochuretitle;
  this.tempLiterature.file = data.file;

  _temp = this.litSearchBarData.filter( (item) =>{
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



//  });
}

onChangeLiteCode(checked,title):any{
    const objBroCode = {
       'brochurecode':''
    };
    console.log(checked)
    if(checked === true){
    const index =  this.contentFromModel.literatur.findIndex((ite) => ite.brochurecode === title);
     if(index === -1){
     objBroCode.brochurecode = title;
     this.contentFromModel.literatur.push(objBroCode);
     }

    } else if(checked === false) {

    const indexToRemove =  this.contentFromModel.literatur.findIndex((ite) => ite.brochurecode === title);
    if(indexToRemove !== -1){
    this.contentFromModel.literatur.splice(indexToRemove,1);

     }
    }


}


viewPdfOfSubCategory(file){
   new InAppBrowser(`assets/productfiles/${file}`, '_blank', 'location=no');
}
 objtscan = {
 'src1' :'',
 'src2':''

 }
  presentPicModal(){

  Camera.getPicture({
    quality:75,
    destinationType: Camera.DestinationType.DATA_URL,
    targetWidth: 200,
    targetHeight: 200,
    saveToPhotoAlbum: true,
    correctOrientation: true
  }).then((imageData) => {
  this.objtscan.src1 = 'data:image/jpeg;base64,' + imageData;
  this.objtscan.src2 =  imageData;

  this.cFormService.setImg64Base(this.objtscan.src1);
  //this.objtscan.src1 = 'data:image/jpeg;base64,' + imageData;
//  this.objtscan.src2 = base64,imageData;
  //let base64Image = 'data:image/jpeg;base64,' + imageData;
  //(<HTMLImageElement>document.getElementById('bsCard')).src =  this.cFormService.getImg64Base();
   // this.cFormService.setPicAtt(this.objtscan.src2);

  }, (err) => {
    console.log(err);
  });

  }


  logForm() {
    console.log(this.myForm)
  }

  step_1 = true;
  step_2 = false;
  step_3 = false;
  step_4 = false;
  step_5 = false;
  step_6 = false;
  step_7 = false;
  step_8 = false;
  step_9 = false;

StepStill(wizzardStep :string){
switch(wizzardStep){
  case "visitor_data":
    this.step_1 = true;
    break;
 case "meetings_details":
   this.step_2 = true;
        break;
 case "sample_order":
   this.step_3 = true;
   break;
 case "literatur":
   this.step_4 = true;
   break;
 case "role_class":
   this.step_5 = true;
        break;
 case "end_use":
   this.step_6 = true;
        break;
 case "author_date":
   this.step_7 = true;
   break;
 case "process":
   this.step_8 = true;
   break;

}
}
  nextStep(wizzardStep :string){
    switch(wizzardStep){
      case "visitor_data":
        this.wizzardStep = 'meetings_details';

        this.step_1 = true;
        break;
     case "meetings_details":
        this.wizzardStep = 'sample_order';

       this.step_2 = true;
            break;
     case "sample_order":
       this.wizzardStep='literatur';
       this.step_3 = true;
       break;
     case "literatur":
       this.wizzardStep ='role_class';
       this.step_4 = true;
       break;
     case "role_class":
       this.wizzardStep='end_use';
       this.step_5 = true;
            break;
     case "end_use":
            this.wizzardStep = 'author_date';
       this.step_6 = true;
            break;
     case "author_date":
       this.wizzardStep = 'process';
       this.step_7 = true;
       break;
     case "process":
      // this.wizzardStep = 'process';
       break;

    }
  }

  getClassName(step) {

      if (step === 'visitor_data' && this.step_1 === true) {

          return 'entered';
      }
      else if (step === 'meetings_details' && this.step_2 === true) {
          return  'entered';
      }
      else if (step === 'sample_order' && this.step_3 === true) {
          return  'entered';
      }
      else if (step === 'literatur' && this.step_4 === true) {
          return  'entered';
      }
      else if (step === 'role_class' && this.step_5 === true) {
          return  'entered';
      }
      else if (step === 'end_use' && this.step_6 === true) {
          return  'entered';
      }
      else if (step === 'author_date' && this.step_7 === true) {
          return  'entered';
      }
      else if (step === 'process' && this.step_8 === true) {
          return  'entered';
      }
  }


save(form){

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
    this.scanBsCardAlert();
    //this.viewCtrl.setBackButtonText(this.from);
  }

  // open Modal to Scan Business Card
  scanBsCardAlert(){
    let alert =  this.alertCtrl.create({
      title: 'SCAN BUSINESS CARD?',
     // cssClass :'alert-wrapper',
      buttons: [
        {
          text: 'Quit',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'OPEN CAMERA AND SCAN',
          handler: () => {
            this.presentPicModal();
          }
        }
      ]
    });
    alert.present();
  }

 deleteCard(){
 this.objtscan.src1 = '';
 this.cFormService.setImg64Base('');
 }

  addNewAuthor(event){
    // TODO save author in localStorage
  }



  addActivity(event) {
   this.contentFromModel.required_action.push(this.activitiesObject);
    this.activitiesObject = {};
    event.preventDefault();
  }

  deleteActivity(index) {
    this.contentFromModel.required_action.splice(index, 1);
  }

  addOrder(event,unit,product){
  const tempObject = {
   'product': product,
   'unit': unit
  }

    this.contentFromModel.orders.push(tempObject);
    this.tempOrderProduct = {
    'product':''
    }
    this.tempOrderUnit ={
    'unit':''
    }
    event.preventDefault();
  }

  deleteOrder(index){
    this.contentFromModel.orders.splice(index,1);
  }

  // literatur
  addLiteratur(event){
    this.contentFromModel.literatur.push(this.literaturObject);
    this.literaturObject ={};
  }

  deleteLiteratur(index){
    this.contentFromModel.literatur.splice(index,1);
  }

   searchQuery:string = '';

  getProducts(ev:any){
     this.products = this.cFormService.getProductsData();
    //this.cFormService.initializeItems();
    // set val to the Value of the searchbar
    let val = ev.target.value;
   console.log(val)
    // if the Value is an empty String don't filter the items
    if(val && val.trim() !=''){
      this.products = this.products.filter( (item) =>{
        console.log(item.title)
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  parseResutl(){
    this.cFormService.parseJsonToXML(this.contentFromModel);
  }
processedReport(){
  this.cFormService.savedSentReport(this.contentFromModel,this.objtscan.src2);
}

processedConfirmMail(){
this.cFormService.openClientMail(this.contentFromModel);
}

ngForm;
resetReport(form){
console.log(form.value);
console.log(form)
 form.control._pristine = true;
form.control._touched = false;
//myForm.pristine();
//this.cFormService.setNewContentFormModel(null);
this.contentFromModel = this.cFormService.getNewContentFormModel();
}

  openmail(){
    this.cFormService.sendData();
  }

}
