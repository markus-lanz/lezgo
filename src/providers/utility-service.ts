// IMPORTS
import xml2js from 'xml2js';
import 'rxjs/add/operator/map';
import { Injectable      } from '@angular/core';
import { Http            } from '@angular/http';
import { ToastController } from 'ionic-angular';

@Injectable()
export class UtilityService {

  public xmlItems  : any;
  public _eBooks   : any;
  public _products : any;

  public _newProducts : any;

  constructor( public http: Http,
               public toastCtrl:ToastController ) {
    console.log('Hello UtilityService Provider');
  }

  getEbooks():any{
    return this._eBooks;
  }

  setEbooks(arr:any){
    this._eBooks = arr;
  }
  presentToast(type,message){
    /*
    let toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      position:'bottom',
      dismissOnPageChange:true,
      cssClass: (type === 'success')? "toast-success":"toast-error"
    });
    //toast.present().then(() => toast.dismiss()).catch(() => toast.dismiss());
    */
  }

  getNewProduct():any{
    return this._newProducts;
  }

  setNewProduct(arr:any){
    this._newProducts = arr;
  }

  getProduct():any{
    return this._products;
  }
  setProduct(arr:any){
  this._products = arr;
  }
   _resultArray = null;
  getResultArray():any{
    return this._resultArray;
  }
  setResultArray(arr:any){
    this._resultArray = arr;
  }
  groupResult = ( $array ) => {
    let tempArray = $array.sort();
    $array = tempArray;
        // Group index
    const alpha = ['A','B','C','D','F','G','H','L','M','N','O','R','S','T','V'];

    // Container for return value
    const result = [];

    // Loop through all letters
    for( let i in alpha){

      // Save letter index
      const letter = alpha[i];

      // Create new array type from letter in the end result variable
      result[letter] = [];

      // Loop through all data items
      for(let item in $array){

        // If the first letter of familiyname match the letter index, store this item
        if($array[item].famName.charAt(0).toUpperCase() === letter ){
          result[letter].push($array[item]);
        }
      }
    }

    this.setResultArray(result);

  };


  loadNewProductsDBXml() {
    this.http.get('assets/XML/NewProductsDB.xml')
        .map(res => res.text())
        .subscribe((products)=> {
          this.parseNewProducts(products)
              .then((products)=> {
                this.setNewProduct(products);
              })
              .catch(()=> {
                this.presentToast('error', 'Your Data cannot be processed');
              });
        });
  }

  loadProductData(){
    this.http.get('assets/XML/ProductDB.xml')
      .map(res => res.text())
      .subscribe((dataPro)=>
      {
        this.parseProductData(dataPro)
          .then((dataPro)=>
          {
            this._products = dataPro;

            this.groupResult( this._products );

            this.setProduct(this._products);
            this.presentToast('success','Your Data has been successfully processed');
          })
          .catch(()=>{
            this.presentToast('error','Your Data cannot be processed');

          });
      });
  }
  parseProductData(data){
    return new Promise(resolve =>
    {
        let arr    = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });

      parser.parseString(data, function (err, result)
      {
        const obj = result.dataSet;
        for(let index in obj.item)

        {
          const item = obj.item[index];
           arr.push({
            famName 		    : item.familiyname[0],
            product 	    : item.productname[0],
            text : item.text[0],
            description : item.description[0],
            title:item.title[0],
            file :item.file[0]
          });
        }

        resolve(arr);
      });
    });
  }
  productParse(item) {
    const tempObj = {
      name: '',
      attr: ''
    };

    for (let data of item) {
     tempObj.name = data[0];
     tempObj.attr= data[1];
    }
    return tempObj;
  }
  loadXml(){
    this.http.get('assets/XML/LiteratureCategory.xml')
      .map(res => res.text())
      .subscribe((data)=>
      {
        this.parseXML(data)
          .then((data)=>
          {
            this.xmlItems = data;
            this.setEbooks(this.xmlItems);
            this.presentToast('success','Your Data has been successfully processed');
          })
          .catch(()=>{
            this.presentToast('error','Your Data cannot be processed');

          });
      });
  }



 literaturData =  null;

_literaturDataFromXMl = null;

setLiteraturDataFromXMl(arr:any){
this._literaturDataFromXMl = arr;
}

getLiteraturDataFromXMl():any{
return this._literaturDataFromXMl;
}
loadXmlLiteraturData(){
  this.http.get('assets/XML/LiteratureDB.xml')
    .map(res => res.text())
    .subscribe((dataLit)=>
    {
      this.parseLiteratursFromXML(dataLit)
        .then((dataLit)=>
        {
          this.literaturData = dataLit;
          this.setLiteraturDataFromXMl(this.literaturData);

          this.presentToast('success','Your Data has been successfully processed');
        })
        .catch(()=>{
          this.presentToast('error','Your Data cannot be processed');

        });
    });
}
parseLiteratursFromXML(data){
  return new Promise(resolve =>
  {
    let k,
      arr    = [],
      parser = new xml2js.Parser(
        {
          trim: true,
          explicitArray: true
        });

    parser.parseString(data, function (err, result)
    {

      const obj = result.dataset;
      for(k in obj.item)
      {
        const it = obj.item[k];
        arr.push({
          cattitle1 		    : it.cattitle1[0],
          cattitle2	    : it.cattitle2[0],
           brochurecode: it.brochurecode[0],
          brochuretitle  : it.brochuretitle[0],
            file  : it.file[0]
        });
      }

      resolve(arr);
    });
  });
}


productsData = null;
_productsDataFromXMl = null;

setProductsDataFromXMl(arr:any){
this._productsDataFromXMl = arr;
}
getProductsDataFromXMl():any{
return this._productsDataFromXMl;
}

  loadXmlProductData(){
    this.http.get('assets/XML/SamplesDB.xml')
      .map(res => res.text())
      .subscribe((dataxml)=>
      {
        this.parseProductsFromXML(dataxml)
          .then((dataxml)=>
          {
            this.productsData = dataxml;
            this.setProductsDataFromXMl(this.productsData);
            this.presentToast('success','Your Data has been successfully processed');
          })
          .catch(()=>{
            this.presentToast('error','Your Data cannot be processed');

          });
      });
  }
  parseProductsFromXML(data){
    return new Promise(resolve =>
    {
      let k,
        arr    = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });

      parser.parseString(data, function (err, result)
      {
        const obj = result.additives;
        for(k in obj.samples)
        {
          const item = obj.samples[k];
          arr.push({
            additive 		    : item.additive[0],
            size 	    : item.size[0],
            id : item.id[0]
          });
        }

        resolve(arr);
      });
    });
  }

  parseXML(data){
    return new Promise(resolve =>
    {
      let k,
        arr    = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });

      parser.parseString(data, function (err, result)
      {
        const obj = result.comics;
        for(k in obj.publication)
        {
          const item = obj.publication[k];
          arr.push({
            id 		    : item.id[0],
            title 	    : item.title[0],
            publisher : item.publisher[0],
            genre 	    : item.genre[0]
          });
        }

        resolve(arr);
      });
    });
  }

  parseNewProducts(data){
    return new Promise(resolve =>
    {
      let k,
          arr    = [],
          parser = new xml2js.Parser(
              {
                trim: true,
                explicitArray: true
              });

      parser.parseString(data, function (err, result)
      {
        const _data = result.dataset.item;
        for(k in _data) {
          arr.push({
            productName : _data[k].titlename ? _data[k].titlename[0] : false,
            techfile    : _data[k].techfile  ? _data[k].techfile[0]  : false,
            safefile    : _data[k].safefile  ? _data[k].safefile[0]  : false,
            factfile   :  _data[k].factfile  ? _data[k].factfile[0]  : false
          });
        }

        resolve(arr);
      });
    });
  }

}
