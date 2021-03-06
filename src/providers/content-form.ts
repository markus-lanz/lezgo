// IMPORTS
import 'rxjs/add/operator/map';
import { DatePipe     } from '@angular/common';
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
        {title: 'Coil Coating', checked: false},
        {title: 'Flooring', checked: false},
        {title: 'General Industry', checked: false},
        {title: 'Marine & Protective', checked: false},
        {title: 'Other Transportation', checked: false},
        {title: 'Powder', checked: false},
        {title: 'Printing Inks', checked: false},
        {title: 'Wood', checked: false},
        {title: 'Construction Chemicals', checked: false},
        {title: 'Adhesives & Sealants', checked: false},
        {title: 'FPD', checked: false},
        {title: 'Others', checked: false}
    ];
    _order = {
        'product': '',
        'unit': ''
    };
    _authorNames = [
        {
            name: 'Dr. Mössmer, Stefan',
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
        },
        {
            name: 'Others',
            email: ''
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


    EndUseField = null;

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
        'firstname'       : '',
        'name'            : '',
        'gendar'          : '',
        'company'         : '',
        'dept'            : '',
        'adress'          : '',
        'country'         : '',
        'language'        : '',
        'phone'           : '',
        'fax'             : '',
        'e_mail'          : '',
        'meeting_details' : '',
        'CRM_RECORD'      : {
            'YES'    : null,
            'NO'     : null,
        },
        'required_action' : [],
        'orders'          : [],
        'orderNewProduct' : '',
        'literatur'       : [],
        'addionalInformationToOrder' : '',
        'Mr'              : null,
        'Mrs'             : null,
        'radio'           : '',
        'endUseOthers'    : '',
        'authorName'      : '',
        'authorEmail'     : '',
        'newAuthorName'   : '',
        'newAuthorEmail'  : '',
        'newAuthorCC'     : '',
        'date'            : '',
        'EndUse'          : '',
        'EndUseField'     : '',
        'ProductGroup'    : '',
        'CustomerRolle'   : '',
        'Classification'  : ''
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
        {title: 'Viscosity Reducer', checked: false},
        {title: 'Wax', checked: false},
        {title: 'Wetting & Dispersing', checked: false},
        {title: 'Others ', checked: false},
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

    Required_Action = '';
    Orders = '';
    litra = '';

    blabla = null;
    useothers = '';
    groupothers = '';


    savedSentReport(model, pic) {
        const blabla2 = new DatePipe('en-US');
        let imgToSend;
        if (pic !== null) {
            imgToSend = 'base64:icon.png//' + pic;
        } else {
            imgToSend = 'base64:icon.png//' + '';
        }

        let tempRqAction = model.required_action;
        if (tempRqAction.length > 0) {
            this.Required_Action = tempRqAction.map(function (elem) {
                return '<li>Activity: ' + elem.activity + ' - ' + 'Who: ' + elem.who + '</li>';
            }).join('');
            this.Required_Action = '<ul>' + this.Required_Action + '</ul>';
        }

        let tempOrder = model.orders;
        if (tempOrder.length > 0) {
            this.Orders = tempOrder.map(function (elem) {
                return '<li>Product: ' + elem.product + ' - ' + 'Unit: ' + elem.unit + '</li>';
            }).join('');
            this.Orders = '<ul>' + this.Orders + '</ul>';
        }

        let tempLiteratur = model.literatur;
        if (tempLiteratur.length > 0) {
            this.litra = tempLiteratur.map(function (elem) {
                return '<li>' + elem.brochurecode + '</li>';
            }).join('');
            this.litra = '<ul>' + this.litra + '</ul>';
        }

        const enduse = ( model.EndUse === 'Others' ) ? model.useothers : model.EndUse;
        const groupuse = ( model.ProductGroup === 'Others ' ) ? model.groupothers : model.ProductGroup;


        let gender = '';
        if (model.Mrs)
            gender = 'Mrs';
        if (model.Mr)
            gender = 'Mr';

        let crmrecord = '';
        if (model.CRM_RECORD.YES) {
            crmrecord = 'yes'
        }
        if (model.CRM_RECORD.NO) {
            crmrecord = 'no'
        }

        let authorString = '';
        if( model.authorName === 'Others'){
            authorString = `
                <tr><td>New Author Name:</td><td>${model.newAuthorName}</td></tr>
                <tr><td>New Author E-Mail:</td><td>${model.newAuthorEmail}</td></tr>
                <tr><td>New Author CC:</td><td>${model.newAuthorCC}</td></tr>
            `;
        }else {
            authorString = `
                <tr><td>Author Name:</td><td>${model.authorName}</td></tr>
                <tr><td>Author E-Mail:</td><td>${model.authorEmail}</td></tr>
            `;
        }

        let modelToSend = `
        <html>
        <head>
        <style>
            table{ border : 1px solid #8f8f8f }
            th{ padding: 2px; background-color: #00A6EB; color: #ffffff; border-bottom: 1px solid #8f8f8f; border-right: 1px solid #8f8f8f; }
            td{ padding : 2px; border-bottom: 1px solid #8f8f8f; border-right: 1px solid #8f8f8f;  }
        </style>
        </head>
        <body>
        <table>
        <tr><th colspan="2">VISITOR DATA</th></tr>
        <tr><td>Gender</td><td>${gender}</td></tr>
        <tr><td>Last Name:</td><td>${model.name}</td></tr>
        <tr><td>First Name:</td><td>${model.firstname}</td></tr>
        <tr><td>Company:</td><td>${model.company}</td></tr>
        <tr><td>Dept:</td><td>${model.dept}</td></tr>
        <tr><td>Address:</td><td>${model.adress}</td></tr>
        <tr><td>Country:</td><td>${model.country}</td></tr>
        <tr><td>Language:</td><td>${model.language}</td></tr> 
        <tr><td>Phone:</td><td>${model.phone}</td></tr>
        <tr><td>Fax:</td><td>${model.fax}</td></tr>
        <tr><td>E-Mail:</td><td>${model.e_mail}</td></tr>
        <tr><td>CRM record:</td><td>${crmrecord}</td></tr>
        
        <tr><th colspan="2">MEETING DETAILS</th></tr>
        <tr><td>Meeting details:</td><td><pre>${model.meeting_details}</pre></td></tr>
        <tr><td>Required action:</td><td>${this.Required_Action}</td></tr>

        <tr><th colspan="2">SAMPLES</th></tr>
        <tr><td>Samples:</td><td>${this.Orders}</td></tr>
        <tr><td>Order product (not listed):</td><td>${model.orderNewProduct}</td></tr>
        
        <tr><th colspan="2">LITERATURE</th></tr>
        <tr><td>Literature:</td><td>${this.litra}</td></tr>
        
        <tr><th colspan="2">CLASSIFICATION & ROLE</th></tr>
        <tr><td>Visitor role:</td><td>${model.CustomerRolle}</td></tr>
        <tr><td>Classification:</td><td>${model.Classification}</td></tr>
        
        <tr><th colspan="2">END USE</th></tr>
        <tr><td>End use:</td><td>${enduse}</td></tr>
        <tr><td>Product group:</td><td>${groupuse}</td></tr>
        
        <tr><th colspan="2">AUTHOR & DATE</th></tr>
        ${authorString}
        <tr><td>Date:</td><td>${blabla2.transform(model.date, 'd MMMM y')}</td></tr>
        
        <tr><th colspan="2">OCR RESULT</th></tr>
        <tr><td colspan="2"><pre>${model.ocrString}</pre></td></tr>
        
        </table>
        </body>
        </html>`;
        //this.blabla = modelToSend;

        cordova.plugins.email.open({
         to          : 'byk@drive.eu',
         attachments : [`${imgToSend}`],
         subject     : 'Exhibition Report',
         body        : `${modelToSend}`,
         isHtml      : true
         });

    }

    _g(): any {
        return this.blabla
    }


    openClientMail(model) {
        let ad = null;
        if (model.mr) {
            ad = `Dear Mr ${model.name}`;
        }
        else {
            ad = `Dear Mrs ${model.name}`;
        }

        let formContent = `
        <div>
        <h3>${ad}</h3>
        <p></p>
        <p>We thank you for visiting our BYK booth at this year’s ECS in Nuremberg.</p>
        <p></p>
        <p>Following our conversation, we hereby attach the technical information requested and confirm your sample ordering.</p>
        <p></p>
        <p>
          For further information, call BYK’s experts on: +49 281 28099<br>
          or send an e-mail to: asktheexpert.byk@altana.com
        </p>
        <p></p>
        <br>
        <p>Yours faithfully</p>
        <p>${model.newAuthorName}</p>
        <br>
        <br>
        <br>
        <p>BYK-Chemie GmbH</p>
        <p>Abelstrasse 45</p> 
        <p>46483 Wesel</p> 
        <p>Germany</p>
        <p>Tel +49 281 670-0</p>
        <p>Fax +49 281 657-35</p>
        <p>mailto:info@byk.com</p>   
        <p>www.byk.com</p>
        <br>
        <br>
        <p style="font-size:12px">
          BYK-Chemie GmbH, Sitz: Wesel, HRB 10656, AG Duisburg<br>
          Geschäftsführer: Dr. Stephan Glander (Vorsitzender), Albert von Hebel, Gerd Judith<br>
          Vorsitzender des Aufsichtsrats: Martin Babilas</p>
        </div>`;

        let clientEmail = model.e_mail;

        cordova.plugins.email.open({
            to: `${clientEmail}`,
            subject: 'Your visit to BYK at ECS 2017',
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
