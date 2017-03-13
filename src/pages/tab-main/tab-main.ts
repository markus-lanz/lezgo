// IMPORTS
import { NavController,
         NavParams                } from 'ionic-angular';
import { Component                } from '@angular/core';
import { HomePage                 } from '../home/home';
import { FormPage                 } from '../form/form';

// - News
import { ShowNewsPage             } from '../NEWS/shownews/shownews';
import { NewproductsPage          } from '../NEWS/newproducts/newproducts';
import { MediainterviewPage       } from '../NEWS/mediainterview/mediainterview';
import { ProductoverviewPage      } from '../NEWS/productoverview/productoverview';
import { ProductPresentationsPage } from '../NEWS/product-presentations/product-presentations';

// - Markets
import { DeCoatingsPage           } from '../MARKETS/de-coatings/de-coatings';
import { WoodFurniturePage        } from '../MARKETS/wood-furniture/wood-furniture';
import { TransportationPage       } from '../MARKETS/transportation/transportation';
import { MarineprotectivePage     } from '../MARKETS/marineprotective/marineprotective';
import { SpecialCoatingsPage      } from '../MARKETS/special-coatings/special-coatings';

// - Byk
import { VideosPage               } from '../BYK/videos/videos';
import { DataGlancePage           } from '../BYK/data-glance/data-glance';

// Product Groups
import { WeetingDispersingPage    } from '../PRODUCTGROUPS/weeting-dispersing/weeting-dispersing';
import { WaxAdditivesPage         } from '../PRODUCTGROUPS/wax-additives/wax-additives';

// Product & Solutions
import { TechnicalBroshuresPage   } from '../PRODUCTSSOLUTIONS/technical-broshures/technical-broshures';
import { AdditivesGuidePage       } from '../PRODUCTSSOLUTIONS/additives-guide/additives-guide';
import { LapappVideosPage         } from '../PRODUCTSSOLUTIONS/lapapp-videos/lapapp-videos';
import { BrandsPage               } from '../PRODUCTSSOLUTIONS/brands/brands';

import { InAppBrowser   } from 'ionic-native';






// COMPONENT
@Component( {
  selector    : 'page-tab-main',
  templateUrl : 'tab-main.html'
} )


// EXPORT
export class TabMainPage {

  pagesInTabs = {};

  mySelectedIndex: number;

  constructor( public navCtrl: NavController, public navParams: NavParams ) {

    this.pagesInTabs = {
      home                 : HomePage,

      // News
      news                 : ShowNewsPage,
      newproducts          : NewproductsPage,
      productoverview      : ProductoverviewPage,
      mediainterview       : MediainterviewPage,
      productpresentations : ProductPresentationsPage,

      // Byk
      form                 : FormPage,
      dataglance           : DataGlancePage,
      videos               : VideosPage,

      // Markets
      decorativecatings    : DeCoatingsPage,
      woodsfurniture       : WoodFurniturePage,
      transportation       : TransportationPage,
      marineprotective     : MarineprotectivePage,
      specialcoatings      : SpecialCoatingsPage,

      // Product groups
      weetingdispersing    : WeetingDispersingPage,
      waxadditives         : WaxAdditivesPage,

      // Product & solutions
      technicalbrochures   : TechnicalBroshuresPage,
      additivesguide       : AdditivesGuidePage,
      labvideos            : LapappVideosPage,
      brands               : BrandsPage,

      ebooks               : false

    };

    //console.log(navCtrl.canGoBack())
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    //console.log(this.mySelectedIndex)

  }

 openWebSite(){
 new InAppBrowser('http://www.byk.com', '_blank', 'location=no');
 }
 editivGuide(){
 new InAppBrowser('https://itunes.apple.com/de/app/additive-guide/id423808347?mt=8', '_blank', 'location=no');
 }
ebookWeb(){
 new InAppBrowser('https://ebooks.byk.com/de/wetting-and-dispersing/warum-werden-netz-und-dispergieradditive-eingesetzt/', '_blank', 'location=no');
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
