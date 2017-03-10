/*
 Generated class for the ProdcutPresentations page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */

// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams      } from 'ionic-angular';


// COMPONENT
@Component( {
  selector    : 'page-product-presentations',
  templateUrl : 'product-presentations.html'
})


// EXPORTS
export class ProductPresentationsPage {

  presentation = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {



    this.presentation = [
      {
        headline : '04. April',
        attributes : [
          {
            'title' : 'Make an economic epoxy easy-to-clean and robust',
            'info'  : '10:30 - 10:50 h | Hall 1 Booth 131'
          },
          {
            'title' : 'Highest matting agent loading with outstanding viscosity reduction in 100% UV-curing coatings. Utopia or reality?',
            'info'  : '13:50 - 14:10 h | Hall 1 Booth 131'
          },
          {
            'title' : 'BYK sustainable: regulatory challenges',
            'info'  : '14:10 - 14:30 h | Hall 7 Booth 726'
          },
          {
            'title' : '“Colorful” corrosion protection and high stain resistance with waterborne coatings',
            'info'  : '14:50 - 15:10 h | Hall 5 Booth 353'
          }
        ]
      },
      {
        headline : '05. April',
        attributes : [
          {
            'title' : 'A novel de-foaming concept for 3K-PU levelling systems',
            'info'  : '10:10 - 10:30 h | Hall 7 Booth 726',
          },
          {
            'title' : 'More colourful - additives for textile inkjet inks',
            'info'  : '11:50 - 12:10 h | Hall 5 Booth 353'
          },
          {
            'title' : 'High performance wax additives in printing inks',
            'info'  : '13:50 - 14:10 h | Hall 1 Booth 131'
          },
          {
            'title' : 'UV inkjet inks – how surface additives enhance performance',
            'info'  : '14:10 - 14:30 h | Hall 5 Booth 353'
          }
        ]
      },
      {
        headline : '06. April',
        attributes : [
          {
            'title' : 'BYK sustainable: Silicones compliant with latest regulations',
            'info'  : '11:10 - 11:30 h | Hall 1 Booth 131',
          },
          {
            'title' : 'Meeting the evergrowing demands – on the road to new associative thickener',
            'info'  : '11:10 - 11:30 h | Hall 5 Booth 353'
          },
          {
            'title' : 'Evolution of acrylic surface additives - increase of surface energy and anti-crater properties',
            'info'  : '13:50 - 14:10 h | Hall 7 Booth 726'
          },
          {
            'title' : 'Strike back the bubble attack – new solvent-free defoamers for solvent-free and high solids systems with particular focus on 100% UV-curing coatings',
            'info'  : '14:10 - 14:30 h | Hall 5 Booth 353'
          }
        ]
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPresentationsPage');
  }

}
