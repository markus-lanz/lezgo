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

// - Byk news
import { ShowNewsPage              } from '../pages/NEWS/shownews/shownews';
import { NewproductsPage           } from '../pages/NEWS/newproducts/newproducts';
import { MediainterviewPage        } from '../pages/NEWS/mediainterview/mediainterview';
import { ProductsgroupsPage        } from '../pages/NEWS/productsgroups/productsgroups';
import { ProductPresentationsPage  } from '../pages/NEWS/product-presentations/product-presentations';
import { DataGlancePage            } from '../pages/BYK/data-glance/data-glance';
import { FormPage                  } from '../pages/form/form';
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
      { title: 'ECS Show News',                  selected: false, component: TabMainPage, tabComponent: ShowNewsPage,             index: 1 },
      { title: 'BYK Lectures at ECS',            selected: false, component: TabMainPage, tabComponent: ProductPresentationsPage, index: 2 },
      { title: 'New Products',                   selected: false, component: TabMainPage, tabComponent: NewproductsPage,          index: 3 },
      { title: 'ECS Media Interviews',           selected: false, component: TabMainPage, tabComponent: MediainterviewPage,       index: 4 },
      { title: 'Video',                          selected: false, component: TabMainPage, tabComponent: VideosPage,               index: 5 },
      { title: 'BYK at a Glance',                selected: false, component: TabMainPage, tabComponent: DataGlancePage,           index: 6 },
      { title: 'Product Overview',               selected: false, component: TabMainPage, tabComponent: ProductsgroupsPage,       index: 7 },
      { title: 'Exhibition Report',              selected: false, component: TabMainPage, tabComponent: FormPage,                 index: 8 },
    ];

    // MARKETS
    this.markets = [
      { title: 'Decorative coatings', selected: false, component: TabMainPage, tabComponent: DeCoatingsPage,       index:  9 },
      { title: 'Wood & furniture',    selected: false, component: TabMainPage, tabComponent: WoodFurniturePage,    index: 10 },
      { title: 'Transportation',      selected: false, component: TabMainPage, tabComponent: TransportationPage,   index: 11 },
      { title: 'Marine & protective', selected: false, component: TabMainPage, tabComponent: MarineprotectivePage, index: 12 },
      { title: 'Special Coatings ',   selected: false, component: TabMainPage, tabComponent: SpecialCoatingsPage,  index: 13 }
    ];

    // PRODUCT GROUPS
    this.productGroups = [
      { title: 'Wetting & Dispersing Additives',       selected: false, component: TabMainPage, tabComponent: WeetingDispersingPage,  index : 14 },
      { title: 'Surface Additives',                    selected: false, component: TabMainPage, tabComponent: WeetingDispersingPage,  index : 14 },
      { title: 'Rheology Additives',                   selected: false, component: TabMainPage, tabComponent: WeetingDispersingPage,  index : 14 },
      { title: 'Defoamers & Air Release Additives',    selected: false, component: TabMainPage, tabComponent: WeetingDispersingPage,  index : 14 },
      { title: 'Wax Additives',                        selected: false, component: TabMainPage, tabComponent: WaxAdditivesPage,       index : 15 },
      { title: 'Adhesion Promoters & Coupling Agents', selected: false, component: TabMainPage, tabComponent: WaxAdditivesPage,       index : 15 },
      { title: 'Viscosity Reducers',                   selected: false, component: TabMainPage, tabComponent: WaxAdditivesPage,       index : 15 },
      { title: 'Processing Additives',                 selected: false, component: TabMainPage, tabComponent: WaxAdditivesPage,       index : 15 },
    ];

    // PRODUCTS & SOLUTIONS
    this.productssolutions = [
      { title: 'Technical Brochures',    selected: false, component: TabMainPage, tabComponent: TechnicalBroshuresPage, index : 16 },
      { title: 'Technical Data Sheets',  selected: false, component: TabMainPage, tabComponent: TechDataSheetPage,      index :  3 },
      { title: 'Additive Guide',         selected: false, component: TabMainPage, tabComponent: AdditivesGuidePage,     index : 17 },
      { title: 'Lab Application Videos', selected: false, component: TabMainPage, tabComponent: LapappVideosPage,       index : 18 },
      { title: 'Brands of BYK',          selected: false, component: TabMainPage, tabComponent: BrandsPage,             index : 19 }
    ];

    this.utilityService.loadXml();
    this.utilityService.loadProductData();
    this.utilityService.loadXmlProductData();
    this.utilityService.loadXmlLiteraturData();
  }



  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.menu.open();
    //  StatusBar.styleDefault();
    //  StatusBar.overlaysWebView(false);
     // StatusBar.backgroundColorByHexString('#ffffff');
  StatusBar.hide();
      Splashscreen.hide();

    });

  }

  navigateTo(page){
    this.menu.close();
    this.nav.push(page);
  }

  openPage(page) {
    // close the menu when clicking a link from the; menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    if (page.index) {

      this.setClickStatustoFalse();
      page.selected = true;
      this.nav.setRoot( page.component, { tabIndex : page.index, testData : page.title, selected: page.selected } );

    } else {
    /*  this.nav.setRoot(page.component).catch(() => {

        console.log("Didn't set nav root");
      }); */
      // this.nav.setRoot(page.component);

      this.nav.push(page.component, true);
    }
  }


  setClickStatustoFalse(){
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
