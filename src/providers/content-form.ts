// IMPORTS
import 'rxjs/add/operator/map';
import { Injectable     } from '@angular/core';
import { Http           } from '@angular/http';
import { File           } from 'ionic-native';
import { UtilityService } from '../providers/utility-service';
import {ToastController} from 'ionic-angular';
import 'jsonfile';
declare let cordova: any;
declare let jsonfile: any;



@Injectable()
export class ContentForm {

  constructor( public http:Http,
               public ut:UtilityService,
               public toastCtrl:ToastController) {
  }

    _products = [
    { title: 'one'   },
    { title: 'two'   },
    { title: 'three' },
    { title: 'four'  },
    { title: 'five'  },
    { title: 'six'   }
  ];
    _units = [
    { title: 'one'   },
    { title: 'two'   },
    { title: 'three' },
    { title: 'four'  },
    { title: 'five'  },
    { title: 'six'   }
  ];
    _wizzardStep = "visitor_data";
    _classificationArray = [
        {title: 'Technical', checked: false},
        {title: 'Commercial', checked: false},
        {title: 'Complaint', checked: false}
    ];
    _newAuthor = {
        name  : '',
        email :''
    };
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
    _endUseArray = [
        {title: 'Architectural', checked: false},
        {title: 'Automotive OEM/Refinish', checked: false},
        {title: 'Can Coating', checked: false},
        {title: 'Flooring', checked: false},
        {title: 'General Industry', checked: false},
        {title: 'Marine & Protective', checked: false},
        {title: 'Other Transportation', checked: false},
        {title: 'Powder', checked: false},
        {title: 'Printing Links', checked: false},
        {title: 'Wood', checked: false},
        {title: 'Construction Chemicals', checked: false},
        {title: 'Adhesives & Sealants', checked: false},
        {title: 'FDP', checked: false},
        {title: 'Others', checked: false}
    ];
    _order = {
        'product': '',
        'unit': ''
    };
    _authorNames = [
        {
            name: 'Dr. M�ssmer, Stefan',
            email: 'Stefan.Moessmer@altana.com'
        },
        {
            name: 'Kremser, Sven',
            email: 'Sven.Kremser@altana.com'
        },
        {
            name: '  Krohnen, Marcel',
            email: 'Frank.Massia@altana.com'
        },
        {
            name: 'Massia, Frank',
            email: 'Frank.Massia@altana.com'
        },
        {
            name: 'Nagel, Carsten',
            email: 'Carsten.Nagel@altana.com'
        }
    ];
    _literatur = {
        'topic':''
    };
    _newRequiredAction = {
        'activity' : '',
        'who'      : ''
    };
    _img64Base = null;
    _picAtt = null;




    getUnits(): any {
        return this._units;
    }


    getProductsData(): any {
        return this._products;
    }


    getWizzardStep(): any {
        return this._wizzardStep;
    }


    setWizzardStep(step: string) {
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
        'orderNewProduct': '',
        'literatur': [],
        'addionalInformationToOrder': '',
        'Mr': null,
        'Mrs': null,
        'radio': '',
        'endUseOthers': '',
        'authorName': '',
        'authorEmail': '',
        'newAuthorName': '',
        'newAuthorEmail': '',
        'date': '',
        'EndUse': '',
        'ProductGroup': '',
        'CustomerRolle': '',
        'Classification': ''
    };


    getEndUseArray(): any {
        return this._endUseArray;
    }


    _productGroupArray = [
        {title: 'Air Release/ Defoamers', checked: false},
        {title: 'Anti-Emission', checked: false},
        {title: 'Conductivity', checked: false},
        {title: 'Levelling Agent', checked: false},
        {title: 'Nanotechnology', checked: false},
        {title: 'Process Agent (Incl. Modifiers, Coupling)', checked: false},
        {title: 'Rheology', checked: false},
        {title: 'Surface', checked: false},
        {title: 'Viscosity reducer', checked: false},
        {title: 'Wax', checked: false},
        {title: 'Wetting & Dispersing', checked: false},
        {title: 'Others', checked: false},
    ];


    getProductGroupArray(): any {
        return this._productGroupArray;
    }


    getCustomerRolle(): any {
        return this._customerRolle;
    }


    getClassificationArray(): any {
        return this._classificationArray;
    }


    getNewAuthor(): any {
        return this._newAuthor;
    }


    getAuthorName(): any {
        return this._authorNames;
    }


    getNewLiteratur(): any {
        return this._literatur;
    }


    getNewOrder(): any {
        return this._order;
    }


    getNewContentFormModel(): any {
        return this._newContentFormModel;
    }


    setNewContentFormModel(model: any) {
        this._newContentFormModel = model;
    }


    getNewRequiredAction(): any {
        return this._newRequiredAction;
    }


    parseJsonToXML(model): any {

        const fs: string = cordova.file.documentsDirectory;
        const dirName: string = 'APP_DATA';
        File.checkDir(fs, dirName).then(
            ()=> {
                let tostsucees = this.toastCtrl.create({
                    message: `${dirName} existiert bereit`,
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                });
                tostsucees.present();
                this.createFile(fs, dirName, model);
            }
        ).catch(
            () => {
                File.createDir(fs, dirName, true).then(()=> {
                    this.ut.presentToast('success', 'erstelt');
                    this.createFile(fs, dirName, model);

                }).catch(() => {
                    this.ut.presentToast('error', 'nicht geklappt');
                });

                let tost = this.toastCtrl.create({
                    message: fs,
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                });
                tost.present();
            });


    }


    createFile(dirPath, dirName, model): any {
        const path = `${dirPath}${dirName}/`;
        let fileName = 'newTempFile.json';
        let toastFileSucce = this.toastCtrl.create({
            message: path,
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toastFileSucce.present();


        File.createFile(path, fileName, true).then(
            () => {
                let toastFileSuccess = this.toastCtrl.create({
                    message: 'File Erstellung ist erfolgreich abgeschlossen',
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                });
                toastFileSuccess.present();
                let pa = path;
                let filename = fileName;
                let data = JSON.stringify(model);
                this.writeFile(pa, filename, data);


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
            ()=> {
                let toastFileError = this.toastCtrl.create({
                    message: 'filename2',
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                });
                toastFileError.present();
            }
        )

    }


    writeFile(filePath, file, data) {

        File.writeFile(filePath, file, 'data', true).then(
            () => {
                let toastWirteFileSuccess = this.toastCtrl.create({
                    message: 'wirte ist erfolgreich abgeschlossen',
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                });
                toastWirteFileSuccess.present();
                //  this.sendData();
            }).catch(()=> {
                let toastWirteFileError = this.toastCtrl.create({
                    message: 'filename2',
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                });
                toastWirteFileError.present();
            }
        )
    }


    setImg64Base(pic: string) {
        this._img64Base = pic;
    }


    getImg64Base(): any {
        return this._img64Base;
    }


    savedSentReport(model, pic) {

        let imgToSend;
        if (pic !== null) {
            imgToSend = 'base64:icon.png//' + pic;
        } else {
            imgToSend = 'base64:icon.png//' + '';
        }

        let modelToSend = `
        <table>
        <tr>
          <td>Name:</td><td>${model.name}</td>
        </tr>
        <tr>
          <td>Ms:</td><td>${model.Mr}</td>
        </tr>
        <tr>
          <td>Mrs:</td><td>${model.Mrs}</td>
        </tr>
        <tr>
          <td>Company:</td><td>${model.company}</td>
        </tr>
        <tr>
          <td>Dept:</td><td>${model.dept}</td>
        </tr>
        <tr>
          <td>Address:</td><td>${model.adress}</td>
        </tr>
        <tr>
          <td>Country:</td><td>${model.country}</td>
        </tr>
        <tr>
          <td>Language:</td><td>${model.language}</td>
        </tr> 
        <tr>
          <td>Phone:</td><td>${model.phone}</td>
        </tr>
        <tr>
          <td>Fax:</td><td>${model.fax}</td>
        </tr>
        <tr>
          <td>E-Mail:</td><td>${model.e_mail}</td>
        </tr>
        <tr>
          <td>CRM_RECORD:</td><td>${model.CRM_RECORD.YES}</td>
        </tr>
        <tr>
          <td>CRM_RECORD:</td><td>${model.CRM_RECORD.NO}</td>
        </tr>
        <tr>
          <td>CRM_RECORD-DETAILS:</td><td>${model.CRM_RECORD.YES}</td>
        </tr>
        <tr>
          <td>Order New Product:</td><td>${model.orderNewProduct}</td>
        </tr>
        <tr>
          <td>Addional Information to Order:</td><td>${model.addionalInformationToOrder}</td>
        </tr>
        <tr>
          <td>End Use:</td><td>${model.EndUse}</td>
        </tr>
        <tr>
          <td>Product Group:</td><td>${model.ProductGroup}</td>
        </tr>
        <tr>
          <td>Customer Rolle:</td><td>${model.CustomerRolle}</td>
        </tr>
        <tr>
          <td>Classification:</td><td>${model.Classification}</td>
        </tr>
        <tr>
          <td>Author Name:</td><td>${model.authorName}</td>
        </tr>
        <tr>
          <td>Author E-Mail:</td><td>${model.authorEmail}</td>
        </tr>
        <tr>
          <td>New Author Name:</td><td>${model.newAuthorName}</td>
        </tr>
        <tr>
          <td>New Author E-Mail:</td><td>${model.newAuthorName}</td>
        </tr>
        <tr>
          <td>Date:</td><td>${model.date}</td>
        </tr>
        </table>`;

        cordova.plugins.email.open({
            to          : 'byk@drive.eu',
            attachments : [`${imgToSend}`],
            subject     : 'Exhibition Report',
            body        : `${modelToSend}`,
            isHtml      : true
        });
    }


    openClientMail(model) {
        let ad = null;
        if (model.mr === true) {
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


    sendData(): any {

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


    getPicAtt(): any {
        return this._picAtt;
    }


    setPicAtt(pic: string) {
        this._picAtt = pic;
    }
}
