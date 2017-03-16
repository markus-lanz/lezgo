// IMPORTS
import { NavController,
         NavParams,
         Nav                      } from 'ionic-angular';
import { Component                } from '@angular/core';
import { HomePage                 } from '../home/home';
import { FormPage                 } from '../form/form';
import { InAppBrowser             } from 'ionic-native';


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
import { GroupOverviewPage        } from '../PRODUCTGROUPS/group-overview/group-overview';
import { WeetingDispersingPage    } from '../PRODUCTGROUPS/weeting-dispersing/weeting-dispersing';
import { WaxAdditivesPage         } from '../PRODUCTGROUPS/wax-additives/wax-additives';
import { RheologyAdditivesPage    } from '../PRODUCTGROUPS/rheology-additives/rheology-additives';
import { SurfaceAdditivesPage     } from '../PRODUCTGROUPS/surface-additives/surface-additives';
import { DefoarmersPage           } from '../PRODUCTGROUPS/defoarmers/defoarmers';
import { AdhesionPage             } from '../PRODUCTGROUPS/adhesion/adhesion';
import { ProcessingPage           } from '../PRODUCTGROUPS/processing/processing';
import { ViscosityPage            } from '../PRODUCTGROUPS/viscosity/viscosity';





// Product & Solutions
import { TechnicalBroshuresPage   } from '../PRODUCTSSOLUTIONS/technical-broshures/technical-broshures';
import { AdditivesGuidePage       } from '../PRODUCTSSOLUTIONS/additives-guide/additives-guide';
import { LapappVideosPage         } from '../PRODUCTSSOLUTIONS/lapapp-videos/lapapp-videos';
import { BrandsPage               } from '../PRODUCTSSOLUTIONS/brands/brands';







// COMPONENT
@Component( {
  selector    : 'page-tab-main',
  templateUrl : 'tab-main.html'
} )


// EXPORT
export class TabMainPage {

  pagesInTabs = {};

  home = {};

  mySelectedIndex: number;

  constructor( public navCtrl: NavController, public navParams: NavParams, public nav: Nav ) {

    this.home = { title: 'Home', selected: true, component: TabMainPage, tabComponent: HomePage, index: 0 };

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
      groupoverview        : GroupOverviewPage,
      weetingdispersing    : WeetingDispersingPage,
      waxadditives         : WaxAdditivesPage,
      rheology             : RheologyAdditivesPage,
      surface              : SurfaceAdditivesPage,
      defoarmers           : DefoarmersPage,
      adhesion             : AdhesionPage,
      processing           : ProcessingPage,
      viscosity            : ViscosityPage,

      // Product & solutions
      technicalbrochures   : TechnicalBroshuresPage,
      additivesguide       : AdditivesGuidePage,
      labvideos            : LapappVideosPage,
      brands               : BrandsPage,
    };

    this.mySelectedIndex = navParams.data.tabIndex || 0;

  }

  openWebSite() {
    new InAppBrowser('http://www.byk.com/en/press-events/shows-events/ecs-2017.html', '_blank', 'location=no');
    return false;
  }

  ebookWeb() {
    new InAppBrowser('https://ebooks.byk.com/de/wetting-and-dispersing/warum-werden-netz-und-dispergieradditive-eingesetzt/', '_blank', 'location=no');
    return false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  navigateToPage(page) {
    this.nav.setRoot(page.component, {tabIndex: page.index, testData: page.title, selected: page.selected});
  }

}
