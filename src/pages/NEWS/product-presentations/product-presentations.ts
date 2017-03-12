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
            'info'  : '10:30 - 10:50 h | Hall 1 Booth 131 | Speaker: Heiko Juckel, Global Head of End Use Marine & Protective Coatings'
          },
          {
            'title' : 'Highest matting agent loading with outstanding viscosity reduction in 100% UV-curing coatings. Utopia or reality?',
            'info'  : '13:50 - 14:10 h | Hall 1 Booth 131 | Speaker: Holger Wach, Head of Technical Service Wood Coatings'
          },
          {
            'title' : 'BYK sustainable: regulatory challenges',
            'info'  : '14:10 - 14:30 h | Hall 7 Booth 726 | Speakers: Brigitte Weber, Global Head of End Use Special Coatings and Carsten Nagel, Global Head of End Use Decorative Coatings'
          },
          {
            'title' : '“Colorful” corrosion protection and high stain resistance with waterborne coatings',
            'info'  : '14:50 - 15:10 h | Hall 5 Booth 353 | Speaker: Speaker: Heiko Juckel, Global Head of End Use Marine & Protective Coatings'
          }
        ]
      },
      {
        headline : '05. April',
        attributes : [
          {
            'title' : 'A novel de-foaming concept for 3K-PU levelling systems',
            'info'  : '10:10 - 10:30 h | Hall 7 Booth 726 | Speaker: Dr. Markus Möller, Head of End Use Construction Additives',
          },
          {
            'title' : 'More colourful - additives for textile inkjet inks',
            'info'  : '11:50 - 12:10 h | Hall 5 Booth 353 | Speaker: Niklas Kircher, Lab Manager Technical Service Inkjet & FPD'
          },
          {
            'title' : 'High performance wax additives in printing inks',
            'info'  : '13:50 - 14:10 h | Hall 1 Booth 131 | Speaker: Marcus Wessel, Applications Specialist Printing Ink Additives'
          },
          {
            'title' : 'UV inkjet inks – how surface additives enhance performance',
            'info'  : '14:10 - 14:30 h | Hall 5 Booth 353 | Speaker: Albert Frank, Head of End Use Graphic Arts & FPD'
          }
        ]
      },
      {
        headline : '06. April',
        attributes : [
          {
            'title' : 'BYK sustainable: Silicones compliant with latest regulations',
            'info'  : '11:10 - 11:30 h | Hall 1 Booth 131 | Speaker: Brigitte Weber, Global Head of End Use Special Coatings',
          },
          {
            'title' : 'Meeting the evergrowing demands – on the road to new associative thickener',
            'info'  : '11:10 - 11:30 h | Hall 5 Booth 353 | Speaker: Carsten Nagel, Global Head of End Use Decorative Coatings'
          },
          {
            'title' : 'Evolution of acrylic surface additives - increase of surface energy and anti-crater properties',
            'info'  : '13:50 - 14:10 h | Hall 7 Booth 726 | Speaker: Mark Heekeren, Head of Technical Service Transportation Coatings'
          },
          {
            'title' : 'Strike back the bubble attack – new solvent-free defoamers for solvent-free and high solids systems with particular focus on 100% UV-curing coatings',
            'info'  : '14:10 - 14:30 h | Hall 5 Booth 353 | Speaker: Marcel Krohnen, Global Head of End Use Wood & Furniture Coatings'
          }
        ]
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPresentationsPage');
  }

}
