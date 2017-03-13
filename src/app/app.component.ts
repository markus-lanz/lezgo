// IMPORTS
import 'rxjs/add/operator/map';
import { Platform,
         MenuController,
         Nav                       } from 'ionic-angular';
import { Http                      } from '@angular/http';
import { Component,
         ViewChild                 } from '@angular/core';
import { StatusBar,
         Splashscreen              } from 'ionic-native';
import { TabMainPage               } from '../pages/tab-main/tab-main';
import { InAppBrowser              } from 'ionic-native';


// - Byk news
import { ShowNewsPage              } from '../pages/NEWS/shownews/shownews';
import { NewproductsPage           } from '../pages/NEWS/newproducts/newproducts';
import { MediainterviewPage        } from '../pages/NEWS/mediainterview/mediainterview';
import { ProductPresentationsPage  } from '../pages/NEWS/product-presentations/product-presentations';
import { DataGlancePage            } from '../pages/BYK/data-glance/data-glance';
import { VideosPage                } from '../pages/BYK/videos/videos';

// - Markets
import { DeCoatingsPage            } from '../pages/MARKETS/de-coatings/de-coatings';
import { WoodFurniturePage         } from '../pages/MARKETS/wood-furniture/wood-furniture';
import { TransportationPage        } from '../pages/MARKETS/transportation/transportation';
import { MarineprotectivePage      } from '../pages/MARKETS/marineprotective/marineprotective';
import { SpecialCoatingsPage       } from '../pages/MARKETS/special-coatings/special-coatings';

// - Product Groups
import { WeetingDispersingPage     } from '../pages/PRODUCTGROUPS/weeting-dispersing/weeting-dispersing';
import { WaxAdditivesPage          } from '../pages/PRODUCTGROUPS/wax-additives/wax-additives';

// - Products & Solutions
import { TechnicalBroshuresPage    } from '../pages/PRODUCTSSOLUTIONS/technical-broshures/technical-broshures';
import { TechDataSheetPage         } from '../pages/PRODUCTSSOLUTIONS/tech-data-sheet/tech-data-sheet';
import { AdditivesGuidePage        } from '../pages/PRODUCTSSOLUTIONS/additives-guide/additives-guide';
import { LapappVideosPage          } from '../pages/PRODUCTSSOLUTIONS/lapapp-videos/lapapp-videos';
import { BrandsPage                } from '../pages/PRODUCTSSOLUTIONS/brands/brands';

// - PROVIDERS
import { UtilityService            } from '../providers/utility-service';



// INTERFACE
export interface PageInterface {
  title         : string;
  component     : any;
  icon          : string,
  index?        : number,
  tabComponent? : any
}


// COMPONENT
@Component( {
  templateUrl : 'app.html'
} )



// EXPORT
export class MyApp {

  @ViewChild( Nav ) nav : Nav;

  rootPage          : any = TabMainPage;

  byknews           : Array <{ selected?: boolean, title: string, component: any, tabComponent?: any, index?: number }>;
  markets           : Array <{ selected?: boolean, title: string, component: any, tabComponent?: any, index?: number }>;
  productGroups     : Array <{ selected?: boolean, title: string, component: any, tabComponent?: any, index?: number }>;
  productssolutions : Array <{ selected?: boolean, title: string, component: any, tabComponent?: any, index?: number }>;

  public xmlItems   : any;

  constructor( public platform       : Platform,
               public menu           : MenuController,
               public http           : Http,
               public utilityService : UtilityService ) {


    this.initializeApp();


    // BYK NEWS
    this.byknews = [
      { title: 'ECS Show News',                  selected: false, component: TabMainPage, tabComponent: ShowNewsPage,             index:  1 },
      { title: 'BYK Lectures at ECS',            selected: false, component: TabMainPage, tabComponent: ProductPresentationsPage, index:  7 },
      { title: 'New Products',                   selected: false, component: TabMainPage, tabComponent: NewproductsPage,          index:  8 },
      { title: 'ECS Media Interviews',           selected: false, component: TabMainPage, tabComponent: MediainterviewPage,       index:  9 },
      { title: 'Videos',                         selected: false, component: TabMainPage, tabComponent: VideosPage,               index:  5 },
      { title: 'BYK at a glance',                selected: false, component: TabMainPage, tabComponent: DataGlancePage,           index: 10 },
    ];

    // MARKETS
    this.markets = [
      { title: 'Decorative coatings', selected: false, component: TabMainPage, tabComponent: DeCoatingsPage,       index: 11 },
      { title: 'Wood & furniture',    selected: false, component: TabMainPage, tabComponent: WoodFurniturePage,    index: 12 },
      { title: 'Transportation',      selected: false, component: TabMainPage, tabComponent: TransportationPage,   index: 13 },
      { title: 'Marine & protective', selected: false, component: TabMainPage, tabComponent: MarineprotectivePage, index: 14 },
      { title: 'Special Coatings ',   selected: false, component: TabMainPage, tabComponent: SpecialCoatingsPage,  index: 15 }
    ];

    // PRODUCT GROUPS
    this.productGroups = [
      { title: 'Wetting & Dispersing Additives',       selected: false, component: TabMainPage, tabComponent: WeetingDispersingPage,  index : 16 },
      { title: 'Surface Additives',                    selected: false, component: TabMainPage, tabComponent: WeetingDispersingPage,  index : 16 },
      { title: 'Rheology Additives',                   selected: false, component: TabMainPage, tabComponent: WeetingDispersingPage,  index : 16 },
      { title: 'Defoamers & Air Release Additives',    selected: false, component: TabMainPage, tabComponent: WeetingDispersingPage,  index : 16 },
      { title: 'Wax Additives',                        selected: false, component: TabMainPage, tabComponent: WaxAdditivesPage,       index : 17 },
      { title: 'Adhesion Promoters & Coupling Agents', selected: false, component: TabMainPage, tabComponent: WaxAdditivesPage,       index : 17 },
      { title: 'Viscosity Reducers',                   selected: false, component: TabMainPage, tabComponent: WaxAdditivesPage,       index : 17 },
      { title: 'Processing Additives',                 selected: false, component: TabMainPage, tabComponent: WaxAdditivesPage,       index : 17 },
    ];

    // PRODUCTS & SOLUTIONS
    this.productssolutions = [
      { title: 'Technical Brochures',    selected: false, component: TabMainPage, tabComponent: TechnicalBroshuresPage, index : 18 },
      { title: 'Technical Data Sheets',  selected: false, component: TabMainPage, tabComponent: TechDataSheetPage,      index :  3 },
      { title: 'Additive Guide',         selected: false, component: TabMainPage, tabComponent: AdditivesGuidePage,     index : 19 },
      { title: 'Lab Application Videos', selected: false, component: TabMainPage, tabComponent: LapappVideosPage,       index :  5 },
      { title: 'Brands of BYK',          selected: false, component: TabMainPage, tabComponent: BrandsPage,             index : 21 }
    ];

    this.utilityService.loadXml();
    this.utilityService.loadProductData();
    this.utilityService.loadXmlProductData();
    this.utilityService.loadXmlLiteraturData();
  }



  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.hide();
      Splashscreen.hide();
    });
  }


  navigateTo(page){
    this.menu.close();
    this.nav.push(page);
  }

  openPage(page) {

    this.menu.close();

    if (page.index) {

      this.setClickStatusToFalse();

      if ( page.title === 'ECS Show News' ) {
        new InAppBrowser(`assets/pdf/ecsshownews/Vorschau_Show_News_ECS_2017_V9.pdf`, '_blank', 'location=no');
      } else if ( page.title === 'Additive Guide' ) {
        new InAppBrowser('https://itunes.apple.com/de/app/additive-guide/id423808347?mt=8', '_blank', 'location=no');
      } else {
        page.selected = true;
        this.nav.setRoot( page.component, { tabIndex: page.index, testData: page.title, selected: page.selected } );
      }

    } else {

      this.nav.push( page.component, true );
    }
  }


  setClickStatusToFalse(){
    for(let item in this.byknews){
      this.byknews[item].selected = false;
    }
    for(let item in this.markets){
      this.markets[item].selected = false;
    }
    for(let item in this.productGroups){
      this.productGroups[item].selected = false;
    }
    for(let item in this.productssolutions){
      this.productssolutions[item].selected = false;
    }
  }
}
