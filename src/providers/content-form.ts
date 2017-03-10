import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {File} from 'ionic-native';
declare let cordova: any;
import {UtilityService} from '../providers/utility-service';
import {ToastController} from 'ionic-angular';
import 'jsonfile';
//import 'xmlcreate';
//import 'js2xmlparser';
declare let jsonfile: any;
//declare let js2xmlparser : any;
//declare let xmlcreate:any;
import { EmailComposer } from 'ionic-native';
import { SocialSharing } from 'ionic-native';
/*
  Generated class for the ContentForm provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ContentForm {

  constructor(public http:Http,public ut:UtilityService ,public toastCtrl:ToastController) {
    console.log('Hello ContentForm Provider');
  }

  _products = [
    {title: 'one'},
    {title: 'two'},
    {title: 'three'},
    {title: 'four'},
    {title: 'five'},
    {title: 'six'}
  ];
  _units = [
    {title: 'one'},
    {title: 'two'},
    {title: 'three'},
    {title: 'four'},
    {title: 'five'},
    {title: 'six'}
  ];
  getUnits():any{
    return this._units;
  }
  getProductsData():any {
    return this._products;
  }

  // ContentForm Setter and getter Method
  _wizzardStep = "visitor_data";

  getWizzardStep():any {
    return this._wizzardStep;
  }

  setWizzardStep(step:string) {
    this._wizzardStep = step;
  }

  _newContentFormModel = {
    'name': '',
    'gendar': '',
    'company': '',
    'dept': '',
    'adress': '',
    'country': '',
    'language': '',
    'phone': '',
    'fax': '',
    'e_mail': '',
    'CRM_RECORD': {
      'YES': null,
      'NO': null,
      'DETAILS': null
    },
    'required_action': [],
    'orders': [],
    'orderNewProduct':'',
    'literatur':[],
    'addionalInformationToOrder':'',
    'Mr':null,
    'Mrs':null,
    'radio':'',
    'endUseOthers':'',
    'authorName':'',
    'authorEmail':'',
    'newAuthorName':'',
    'newAuthorEmail':'',
    'date':'',
    'EndUse':'',
    'ProductGroup':'',
    'CustomerRolle':'',
    'Classification':''
  };

  _endUseArray =
      [
        {title:'Architectural', checked:false},
        {title:'Automotive OEM/Refinish', checked:false},
        {title:'Can Coating', checked:false},
        {title:'Flooring', checked:false},
        {title:'General Industry', checked:false},
        {title:'Marine & Protective', checked:false},
        {title:'Other Transportation', checked:false},
        {title:'Powder', checked:false},
        {title:'Printing Links', checked:false},
        {title:'Wood', checked:false},
        {title:'Construction Chemicals', checked:false},
        {title:'Adhesives & Sealants', checked:false},
        {title:'FDP', checked:false},
        {title:'Others', checked:false}
      ];
   getEndUseArray():any{
     return this._endUseArray;
   }

   _productGroupArray = [
     {title:'Air Release/ Defoamers',checked:false},
     {title:'Anti-Emission',checked:false},
     {title:'Conductivity',checked:false},
     {title:'Levelling Agent',checked:false},
     {title:'Nanotechnology',checked:false},
     {title:'Process Agent (Incl. Modifiers, Coupling)',checked:false},
     {title:'Rheology',checked:false},
     {title:'Surface',checked:false},
     {title:'Viscosity reducer',checked:false},
     {title:'Wax',checked:false},
     {title:'Wetting & Dispersing',checked:false},
     {title:'Others',checked:false},

   ];

   getProductGroupArray():any{
     return this._productGroupArray;
   }
   _customerRolle =[
     {title:'Direct Customer',checked:false},
     {title:'Indirect Customer',checked:false},
     {title:'Prospect',checked:false},
     {title:'Distributor / Agent',checked:false},
     {title:'Competitor',checked:false},
     {title:'Partner',checked:false},
     {title:'Raw Material Supplier',checked:false},
     {title:'R&D Partner / Institute',checked:false},
     {title:'Consultancy',checked:false},
     {title:'Press/PR',checked:false}
   ];
   getCustomerRolle():any{
     return this._customerRolle;
   }

   _classificationArray = [
     {title:'Technical', checked:false},
     {title:'Commercial', checked:false},
     {title:'Complaint', checked:false}
   ];
   getClassificationArray():any{
     return this._classificationArray;
   }

  _newAuthor =
  { name:'',
    email:''

  }

  getNewAuthor():any{
    return this._newAuthor;
  }



  _order = {
    'product': '',
    'unit': ''
  };


 _authorNames= [
 {
 name:'Dr. Mössmer, Stefan',
 email:'Stefan.Moessmer@altana.com'
},
   {
   name:'Kremser, Sven',
   email:'Sven.Kremser@altana.com'
 },
   {
     name:'  Krohnen, Marcel',
     email:'Frank.Massia@altana.com'
   },
   {
     name:'Massia, Frank',
     email:'Frank.Massia@altana.com'
   },
   {
     name:'Nagel, Carsten',
     email:'Carsten.Nagel@altana.com'
   }
 ];

  getAuthorName():any{
    return this._authorNames;
  }

  _literatur ={
    'topic':''
  }
  getNewLiteratur():any{
    return this._literatur;
  }

  getNewOrder():any {
    return this._order;
  }


  getNewContentFormModel():any {
    return this._newContentFormModel;
  }

  setNewContentFormModel(model:any) {
    this._newContentFormModel = model;
  }

  _newRequiredAction = {
    'activity': '',
    'who': ''
  };

  getNewRequiredAction():any {
    return this._newRequiredAction;
  }
/*
  parseModel2xml(model){
   // let Js2Xml = js2xml.Js2Xml;
    let js2xml = new js2xmlparser();
    let result = js2xml.parse("data",model);
    console.log(result.toString());

  }
*/
   parseJsonToXML(model):any{

      const fs:string = cordova.file.documentsDirectory;
      const dirName:string ='APP_DATA';
     File.checkDir(fs,dirName).then(
       ()=>{
         let tostsucees= this.toastCtrl.create({
           message:`${dirName} existiert bereit`,
           showCloseButton: true,
           closeButtonText: 'Ok'
         });
         tostsucees.present();
         this.createFile(fs,dirName,model);
       }
     ).catch(
       () =>{
         File.createDir(fs,dirName,true).then( ()=>{
           this.ut.presentToast('success','erstelt');
            this.createFile(fs,dirName,model);

         }).catch( () =>{
           this.ut.presentToast('error','nicht geklappt');
         });

         let tost= this.toastCtrl.create({
           message: fs,
           showCloseButton: true,
           closeButtonText: 'Ok'
         });
         tost.present();
       });


   }

   createFile(dirPath,dirName,model):any{
    const path= `${dirPath}${dirName}/`;
    let fileName ='newTempFile.json';
    let toastFileSucce = this.toastCtrl.create({
      message: path,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toastFileSucce.present();



    File.createFile(path,fileName,true).then(
      () =>{
        let toastFileSuccess = this.toastCtrl.create({
          message: 'File Erstellung ist erfolgreich abgeschlossen',
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        toastFileSuccess.present();
        let pa = path;
        let filename = fileName
          let data =  JSON.stringify(model);
        this.writeFile(pa,filename,data)
      //  this.sendData();


/*
        jsonfile.writeFile(filename2,data,{append:true}).then(
          () =>{
            let toastWirteFileSuccess = this.toastCtrl.create({
              message: 'wirte ist erfolgreich abgeschlossen',
              showCloseButton: true,
              closeButtonText: 'Ok'
            });
            toastWirteFileSuccess.present();
              //  this.sendData();
          }).catch( ()=>{
            let toastWirteFileError = this.toastCtrl.create({
              message: filename2,
              showCloseButton: true,
              closeButtonText: 'Ok'
            });
            toastWirteFileError.present();
        }
        ) */

      }).catch(
      ()=>{
        let toastFileError = this.toastCtrl.create({
          message: 'filename2',
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        toastFileError.present();
      }
    )

  }

 writeFile(filePath,file,data){

 File.writeFile(filePath,file,'data',true).then(
 () =>{
   let toastWirteFileSuccess = this.toastCtrl.create({
     message: 'wirte ist erfolgreich abgeschlossen',
     showCloseButton: true,
     closeButtonText: 'Ok'
   });
   toastWirteFileSuccess.present();
     //  this.sendData();
 }).catch( ()=>{
   let toastWirteFileError = this.toastCtrl.create({
     message: 'filename2',
     showCloseButton: true,
     closeButtonText: 'Ok'
   });
   toastWirteFileError.present();
}
)
 }

_img64Base = null;

setImg64Base(pic:string){
this._img64Base = pic;
}
getImg64Base():any{
return this._img64Base;
}
savedSentReport(model,pic){
console.log(model)
let imgToSend    ;//= this.getPicAtt();
   if(pic !== null){
   imgToSend = 'base64:icon.png//'+ pic;
   }else{
   imgToSend ='base64:icon.png//' + '';
   }


 let modelToSend = `
  <div>
  <p>Name : ${model.name}</p>
  <p>Ms : ${model.Mr}</p>
    <p>Mrs : ${model.Mrs}</p>
  <p>Company : ${model.company}</p>
  <p>Dept : ${model.dept}</p>
  <p>Adress : ${model.adress}</p>
  <p>Country : ${model.country}</p>
  <p>Language : ${model.language}</p>
  <p>Phone : ${model.phone}</p>
    <p>Fax : ${model.fax}</p>
    <p>E-Mail : ${model.e_mail}</p>
    <p>CRM_RECORD : ${model.CRM_RECORD.YES}</p>
    <p>CRM_RECORD : ${model.CRM_RECORD.NO}</p>
    <p>CRM_RECORD-DETAILS : ${model.CRM_RECORD.DETAILS}</p>
      <p>Order New Product : ${model.orderNewProduct}</p>
      <p>Addional Information to Order : ${model.addionalInformationToOrder}</p>

      <p>End Use : ${model.EndUse}</p>
        <p>Product Group : ${model.ProductGroup}</p>
          <p>Customer Rolle : ${model.CustomerRolle}</p>
            <p>Classification : ${model.Classification}</p>
  <p>Author Name : ${model.authorName}</p>
    <p>Author E-Mail : ${model.authorEmail}</p>
      <p>New Author Name : ${model.newAuthorName}</p>
        <p>New Author Email : ${model.newAuthorEmail}</p>
          <p>Date : ${model.date}</p>
  `;
cordova.plugins.email.open({
  to: 'byk@drive.eu',
  attachments: [`${imgToSend}`],
  subject: 'Exhibition Report',
  body: `${modelToSend}`,
  isHtml: true
});


}

 openClientMail(model){
 let ad = null;
 if(model.mr === true){
   ad = `Dear Mr ${model.name}`;
    }
    else {
    ad = `Dear Mrs ${model.name}`;
    }


 let formContent = `
 <div>
  <h3>${ad}</h3>
  <p></p>
  <p>Thank you for getting in touch! We appreciate you contacting us about [Contact Reason]. We try to respond as soon as possible, so one of our Customer Service colleagues will get back to you within a few hours. Have a great day ahead!
   </p>
   <p></p>
   <p></p>
   <p>Yours sincerely</p>
   <p>Byk Team </p>
 </div>`;


 let clientEmail = model.e_mail;


 cordova.plugins.email.open({
   to: `${clientEmail}`,
   subject: 'Exhibition Report Confirm',
   body: `${formContent}`,
   isHtml: true
 });

 }
  sendData():any{

  let pic = this.getPicAtt();
  let toastFileError = this.toastCtrl.create({
    message: `${pic}`,
    showCloseButton: true,
    closeButtonText: 'Ok'
  });
  toastFileError.present();

  cordova.plugins.email.open({
    to: 'max@mustermann.de',
    cc: 'erika@mustermann.de',
    bcc: ['john@doe.com', 'jane@doe.com'],
    attachments: [`${pic}`],
    subject: 'Cordova Icons',
    body: 'How are you? Nice greetings from Leipzig',
    isHtml: true
  });


/*
  const mail = 'testmail';
  const bild = pic;
  SocialSharing.shareViaEmail('Body', mail, ['recipient@example.org'],null,null,bild).then(
  () => {
    // Success!
  }).catch(() => {
    // Error!
  });


*/
  }

  _picAtt = null;
  getPicAtt():any{
  return this._picAtt;
  }
  setPicAtt(pic:string){
  this._picAtt = pic;
  }
}
