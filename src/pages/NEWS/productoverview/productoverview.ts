// IMPORTS
import { Component           } from '@angular/core';
import { NavController,
         NavParams           } from 'ionic-angular';
import{ UtilityService       } from '../../../providers/utility-service';
import{ ProductOVDetailsPage } from '../../product-ov-details/product-ov-details';


// COMPONENT
@Component( {
  selector    : 'page-productoverview',
  templateUrl : 'productoverview.html',
} )


// EXPORT
export class ProductoverviewPage {
  productCategory = null;
  productA= null;
  productB = null;
  productC = null;
  productD = null;
  productF = null;
  productG = null;
  productH = null;
  productL = null;
  productM = null;
  productN = null;
  productO = null;
  productR = null;
  productS = null;
  productT = null;
  productV = null;
  q = [];

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               public ut:UtilityService ) {

    this.productCategory = ut.getResultArray();

    this.productA = this.productCategory['A'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );
    this.productB = this.productCategory['B'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );
    this.productC = this.productCategory['C'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );
    this.productD = this.productCategory['D'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );
    this.productF = this.productCategory['F'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );
    this.productG = this.productCategory['G'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );
    this.productH = this.productCategory['H'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );
    this.productL = this.productCategory['L'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );
    this.productM = this.productCategory['M'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );
    this.productN = this.productCategory['N'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );
    this.productO = this.productCategory['O'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );
    this.productR = this.productCategory['R'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );
    this.productS = this.productCategory['S'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );
    this.productT = this.productCategory['T'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );
    this.productV = this.productCategory['V'].sort(function(a,b) {return (a.famName > b.famName) ? 1 : ((b.famName > a.famName) ? -1 : 0);} );

    this.q.push(
        { letter : 'A', items : this.productCategory['A'] },
        { letter : 'B', items : this.productCategory['B'] },
        { letter : 'C', items : this.productCategory['C'] },
        { letter : 'D', items : this.productCategory['D'] },
        { letter : 'F', items : this.productCategory['F'] },
        { letter : 'G', items : this.productCategory['G'] },
        { letter : 'H', items : this.productCategory['H'] },
        { letter : 'L', items : this.productCategory['L'] },
        { letter : 'M', items : this.productCategory['M'] },
        { letter : 'N', items : this.productCategory['N'] },
        { letter : 'O', items : this.productCategory['O'] },
        { letter : 'R', items : this.productCategory['R'] },
        { letter : 'S', items : this.productCategory['S'] },
        { letter : 'T', items : this.productCategory['T'] },
        { letter : 'V', items : this.productCategory['V'] },
    )
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoverviewPage');
  }


  gotoDetailsPage(data,dataCat){
    this.navCtrl.push(ProductOVDetailsPage,{famName:data,cat:dataCat});
  }
}
