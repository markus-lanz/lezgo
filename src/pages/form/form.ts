// IMPORTS
import { Component              } from '@angular/core';
import { NavController,
         NavParams,
         AlertController,
         ModalController, ToastController ,LoadingController     } from 'ionic-angular';
import { ContentForm            } from '../../providers/content-form';
import { UtilityService         } from '../../providers/utility-service';
import { ProductSearchModalPage } from '../product-search-modal/product-search-modal';
import { UnitSearchModalPage    } from '../unit-search-modal/unit-search-modal';
import { Camera                 } from 'ionic-native';
import { InAppBrowser,
         AppAvailability,
         Device                 } from 'ionic-native';
import { Keyboard } from 'ionic-native';

// COMPONENT
@Component( {
  selector    : 'page-form',
  templateUrl : 'form.html'
} )


// EXPORT
export class FormPage {


srcImage: string;
  OCRAD: any;
  myForm;
  ngForm;
  from : any;
  to   : any;

  wizzardStep:string    = null;
  activitiesObject      = {};
  tempOrderProduct      = { 'product' : '' };
  tempOrderUnit         = { 'unit'    : '' };
  tempLiterature        = {
    'cattitle1'     : '',
    'cattitle2'     : '',
    'brochurecode'  : '',
    'brochuretitle' : '',
    'file'          : ''
  };

  contentFromModel      = null;
  contentFromService    =  null;
  literaturObject       = {};
  authorObject          = {};
  units                 = null;
  products              = null;
  authors               = null;
  endUseArray           = null;
  productGroupArray     = null;
  customerRolleArray    = null;
  classificationArray   = null;
  productSearchBarData  = null;
  litSearchBarData      = [];
  literaData            = null;
  literawithoutDu       = null;
  checked               = {};
  _selectedProductGroup = null;
  pic                   = null;
  literaturModel        = [];
  literaturSubCategory  = [];
  selectedRow           = null;
  searchQuery:string    = '';

  objtscan = {
    'src1' : '',
    'src2' : ''
  };
  step_1 = true;
  step_2 = false;
  step_3 = false;
  step_4 = false;
  step_5 = false;
  step_6 = false;
  step_7 = false;
  step_8 = false;
  step_9 = false;



    constructor( public navCtrl : NavController,
               public navParams : NavParams,
               public alertCtrl : AlertController,
               public cFormService:ContentForm,
               public modalCtrl:ModalController,
               public utService:UtilityService , public toastCtrl:ToastController,
                public loadingCtrl: LoadingController) {

    this.contentFromService = cFormService;
    this.wizzardStep = cFormService.getWizzardStep();
    this.contentFromModel = cFormService.getNewContentFormModel();
    this.activitiesObject = cFormService.getNewRequiredAction();
    this.products = cFormService.getProductsData();
    this.units= cFormService.getUnits();
    this.literaturObject = cFormService.getNewLiteratur();
    this.authors = cFormService.getAuthorName();
    this.from = navParams.data.from;
    this.to = navParams.data.to;
    this.endUseArray = cFormService.getEndUseArray();
    this.customerRolleArray = cFormService.getCustomerRolle();
    this.classificationArray = cFormService.getClassificationArray();
    this.productGroupArray = cFormService.getProductGroupArray();
    this.productSearchBarData = utService.getProductsDataFromXMl();
    this.literaData = utService.getLiteraturDataFromXMl();
    this.litSearchBarData =utService.getLiteraturDataFromXMl();

    this.contentFromModel.date = new Date().toISOString()


  }
valueforngif = false;


    ionViewDidEnter() {

        Keyboard.onKeyboardShow().subscribe(()=> {
            this.valueforngif = true
        })
        Keyboard.onKeyboardHide().subscribe(()=> {
            this.valueforngif = false
        })
        console.log('test neu load');
        this.scanBsCardAlert();
    }


    onChange(change) {
        if (change === 'mr') {
            this.contentFromModel.Mrs = false;
        }
        else if (change === 'mrs') {
            this.contentFromModel.Mr = false;
        }
    }


    onChangeCRMRECORD(change) {

        if (change === 'yes') {
            this.contentFromModel.CRM_RECORD.NO = false;
        }
        else if (change === 'no') {
            this.contentFromModel.CRM_RECORD.YES = false;
        }
    }

    groupothers = null;
    onChangeProductGroup(checked, position, items, title): any {
        items.filter((des, index) => {

            if (position != index) {
                if (checked === true) {
                    des.checked = false;
                    this.contentFromModel.ProductGroup = title;
                } else {
                    this.contentFromModel.ProductGroup = '';
                }

            }
        });

    }

    useothers = null;
    onChangeEndUse(checked, position, items, title): any {
        items.filter((des, index) => {
            if (position != index) {
                if (checked === true) {
                    des.checked = false;
                    this.contentFromModel.EndUse = title;
                } else {
                    this.contentFromModel.EndUse = '';
                }

            }
        });

    }


    onChangeClassification(checked, position, items, title): any {
        items.filter((des, index) => {
            if (position != index) {
                if (checked === true) {
                    des.checked = false;
                    this.contentFromModel.Classification = title;
                } else {
                    this.contentFromModel.Classification = '';
                }

            }
        });

    }

    onChangelitCatego(position, items): any {
        items.filter((des, index) => {
            if (position != index) {
                des.checked = false;
            }
        });
    }


    onChangeCustomerRolle(checked, position, items, title): any {
        items.filter((des, index) => {
            if (position != index) {
                if (checked === true) {
                    des.checked = false;
                    this.contentFromModel.CustomerRolle = title;
                } else {
                    this.contentFromModel.CustomerRolle = '';
                }
            }
        });
    }


    setAuthorEmail() {
        let authemail = this.authors.filter((item) => item.name === this.contentFromModel.authorName);
        this.contentFromModel.authorEmail = authemail[0].email;
    }


    presentSearchProductsModal() {
        let proModal = this.modalCtrl.create(ProductSearchModalPage);
        proModal.present();
        proModal.onDidDismiss(data => {
            if (data) {
                this.tempOrderProduct.product = data.additive;
                this.tempOrderUnit.unit = null;
            }

        });
    }


    presentSearchUnitsModal() {
        if(!this.tempOrderProduct.product) return;
        let unitModal = this.modalCtrl.create(UnitSearchModalPage, {productName: this.tempOrderProduct.product});
        unitModal.present();
        unitModal.onDidDismiss(data => {
            if (data) {
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
            new InAppBrowser(httpUrl, '_system');
            return;
        }

        AppAvailability.check(app).then(
            () => { // success callback
                new InAppBrowser(appUrl, '_system');
            },
            () => { // error callback
                new InAppBrowser(httpUrl, '_system');
            }
        );
    }


    openExternalApp() {
        this.launchExternalApp('io.ionic.starter://', 'com.instagram.android', 'io.ionic.starter://', 'https://www.google.com/');
    }


    presentSearchLitModal(data, index) {

        if (data) {
            this.literaturModel               = [];
            this.selectedRow                  = index;
            this.tempLiterature.cattitle1     = data.cattitle1;
            this.tempLiterature.cattitle2     = data.cattitle2;
            this.tempLiterature.brochurecode  = data.brochurecode;
            this.tempLiterature.brochuretitle = data.brochuretitle;
            this.tempLiterature.file          = data.file;

            let _temp = this.litSearchBarData.filter((item) => {
                return item.cattitle1 === this.tempLiterature.cattitle1;
            });

            for (let g in _temp) {
                const subcat = _temp[g].cattitle2;

                if (this.literaturModel.length > 0) {
                    const it = this.literaturModel.findIndex((item) => item.subcatname === subcat);
                    if (it === -1) {
                        this.literaturModel.push({subcatname: subcat, items: []});
                    }
                } else {
                    this.literaturModel.push({subcatname: subcat, items: []});
                }
            };


            for (let ki in this.literaturModel) {

                const subcat = this.literaturModel[ki].subcatname;

                let array = _temp.filter((items) => {
                    return items.cattitle2 === subcat
                });

                this.literaturModel[ki].items = array
            }
        }
    }


    onChangeLiteCode(checked, title): any {
        const objBroCode = {
            'brochurecode': ''
        };

        if (checked === true) {
            const index = this.contentFromModel.literatur.findIndex((ite) => ite.brochurecode === title);
            if (index === -1) {
                objBroCode.brochurecode = title;
                this.contentFromModel.literatur.push(objBroCode);
            }

        } else if (checked === false) {

            const indexToRemove = this.contentFromModel.literatur.findIndex((ite) => ite.brochurecode === title);
            if (indexToRemove !== -1) {
                this.contentFromModel.literatur.splice(indexToRemove, 1);
            }
        }
    }


    viewPdfOfSubCategory(file) {
        new InAppBrowser(`assets/pdf/brochures/${file}`, '_blank', 'location=no');
    }


    presentPicModal() {

        Camera.getPicture({
            quality            : 100,
            destinationType    : Camera.DestinationType.DATA_URL,
            targetWidth        : 600,
            targetHeight       : 600,
            saveToPhotoAlbum   : true,
            correctOrientation : true,
            allowEdit: true
        }).then((imageData) => {
            this.objtscan.src1 = 'data:image/jpeg;base64,' + imageData;
            this.objtscan.src2 = imageData;
            this.cFormService.setImg64Base(this.objtscan.src1);
            this.srcImage = `data:image/jpeg;base64,${imageData}`;

        }, (err) => {
            console.log(err);
        });

    }
    analyze() {
    let loader = this.loadingCtrl.create({
        content: 'Please wait...'
       });
       loader.present();
        (<any>window).OCRAD(document.getElementById('bsCard'), text => {
        loader.dismissAll();
        let toastFileError = this.toastCtrl.create({
            message: `${text}`,
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toastFileError.present();
        console.log(text);
        });



      }


    logForm() {
        console.log(this.myForm)
    }


    StepStill(wizzardStep: string) {
        switch (wizzardStep) {
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
                //this.processedReport();
                break;

        }
    }


    nextStep(wizzardStep: string) {
        switch (wizzardStep) {
            case "visitor_data":
                this.wizzardStep = 'meetings_details';
                this.step_1 = true;
                break;
            case "meetings_details":
                this.wizzardStep = 'sample_order';
                this.step_2 = true;
                break;
            case "sample_order":
                this.wizzardStep = 'literatur';
                this.step_3 = true;
                break;
            case "literatur":
                this.wizzardStep = 'role_class';
                this.step_4 = true;
                break;
            case "role_class":
                this.wizzardStep = 'end_use';
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
                this.step_8 = true;
                break;
        }
    }
validation = false;
validaerror = false;
emailinvalid = false;

validationProcess(form){
this.validation = true;

this.emailinvalid = this.isValid(this.contentFromModel.e_mail);
if(!this.contentFromModel.name || !this.contentFromModel.firstname  || !this.contentFromModel.e_mail || this.emailinvalid) {

 this.validaerror = true;
 this.getClassName('visitor_data');

} else {
this.validaerror = false;
}

}

// email Validation
isValid(email: string){

const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (email != "" && (email.length <= 5 || !EMAIL_REGEXP.test(email))) {
            return true;
        }

        return false;
    }




    getClassName(step) {

        if (step === 'visitor_data' && this.step_1 === true && !this.validaerror) {
            return 'entered';
        }
        else if(step === 'visitor_data' && this.step_1 === true && this.validaerror){
          return 'error';
        }
        else if (step === 'meetings_details' && this.step_2 === true) {
            return 'entered';
        }
        else if (step === 'sample_order' && this.step_3 === true) {
            return 'entered';
        }
        else if (step === 'literatur' && this.step_4 === true) {
            return 'entered';
        }
        else if (step === 'role_class' && this.step_5 === true) {
            return 'entered';
        }
        else if (step === 'end_use' && this.step_6 === true) {
            return 'entered';
        }
        else if (step === 'author_date' && this.step_7 === true) {
            return 'entered';
        }
        else if (step === 'process' && this.step_8 === true) {
            return 'entered';
        }
    }


    save(form) {

    }


    ionViewDidLoad() {

    }


    scanBsCardAlert() {
        let alert = this.alertCtrl.create({
            title: 'SCAN BUSINESS CARD',
            buttons: [
                {
                    text: 'Quit',
                    handler: () => {
                    }
                },
                {
                    text: 'SCAN',
                    handler: () => {
                        this.presentPicModal();
                    }
                }
            ]
        });
        alert.present();
    }


    deleteCard() {
        this.objtscan.src1 = '';
        this.cFormService.setImg64Base('');
    }


    addNewAuthor(event) {
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


    addOrder(event, unit, product) {
        const tempObject = {
            'product': product,
            'unit': unit
        }

        this.contentFromModel.orders.push(tempObject);
        this.tempOrderProduct = {
            'product': ''
        }
        this.tempOrderUnit = {
            'unit': ''
        }
        event.preventDefault();
    }


    deleteOrder(index) {
        this.contentFromModel.orders.splice(index, 1);
    }


    addLiteratur(event) {
        this.contentFromModel.literatur.push(this.literaturObject);
        this.literaturObject = {};
    }


    deleteLiteratur(index) {
        this.contentFromModel.literatur.splice(index, 1);
    }


    getProducts(ev: any) {
        this.products = this.cFormService.getProductsData();
        let val = ev.target.value;
        if (val && val.trim() != '') {
            this.products = this.products.filter((item) => {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }


    parseResutl() {
        this.cFormService.parseJsonToXML(this.contentFromModel);
    }

    a=null;
    processedReport() {
        this.cFormService.savedSentReport(this.contentFromModel, this.objtscan.src2);
        this.a=this.cFormService._g();
    }


    processedConfirmMail() {
        this.cFormService.openClientMail(this.contentFromModel);
    }


    resetReport() {

        this.selectedRow = null;
        this.contentFromModel.meeting_details = "";
        this.contentFromModel.name = "";
        this.contentFromModel.firstname = "";
        this.contentFromModel.Mrs = null;
        this.contentFromModel.Mr = null;
        this.contentFromModel.company = "";
        this.contentFromModel.dept = "";
        this.contentFromModel.adress = "";
        this.contentFromModel.country = "";
        this.contentFromModel.language = "";
        this.contentFromModel.e_mail = "";
        this.contentFromModel.phone = "";
        this.contentFromModel.fax = "";
        this.objtscan.src1 = "";
        this.contentFromModel.CRM_RECORD.YES = null;
        this.contentFromModel.CRM_RECORD.NO = null;
        this.contentFromModel.CRM_RECORD.DETAILS = null;
        this.activitiesObject = {};

        this.contentFromModel.required_action = [];
        this.tempOrderProduct.product = "";
        this.tempOrderUnit.unit = "";
        this.contentFromModel.orders = [];
        this.contentFromModel.orderNewProduct = "";
        this.literaturModel = [];
        this.contentFromModel.literatur = [];
        this.contentFromModel.addionalInformationToOrder = "";
        this.contentFromModel.CustomerRolle = "";
        this.customerRolleArray.filter((des, index) => {
            des.checked = false;
        });
        this.classificationArray.filter((des, index) => {
            des.checked = false;
        });
        this.contentFromModel.Classification = "";
        this.endUseArray.filter((des, index) => {
            des.checked = false;
        });
        this.contentFromModel.EndUse = "";
        this.productGroupArray.filter((des, index) => {
            des.checked = false;
        });
        this.literaData.filter((des, index) => {
            des.checked = false;
        });
        this.contentFromModel.ProductGroup = "";
        this.contentFromModel.authorName = "";
        this.contentFromModel.newAuthorName = "";
        this.contentFromModel.newAuthorEmail = "";
        //this.contentFromModel.date = "";
        this.step_1 = true;
        this.step_2 = false;
        this.step_3 = false;
        this.step_4 = false;
        this.step_5 = false;
        this.step_6 = false;
        this.step_7 = false;
        this.step_8 = false;
        this.step_9 = false;
        this.wizzardStep = "visitor_data";
        this.validaerror = false;
        this.validation = false;
//  this.navCtrl.push(HomePage);
    }

    openmail() {
        this.cFormService.sendData();
    }
}
