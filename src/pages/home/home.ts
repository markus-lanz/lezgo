// IMPORTS
import { Component,animate,transition,trigger,state,style,ViewChild  } from '@angular/core';

import { NavController,
         NavParams,
         Nav            } from 'ionic-angular';
import { ContentForm    } from '../../providers/content-form';
import { TabMainPage    } from "../tab-main/tab-main";

// - Byk news
import { ShowNewsPage              } from '../../pages/NEWS/shownews/shownews';
import { NewproductsPage           } from '../../pages/NEWS/newproducts/newproducts';
import { MediainterviewPage        } from '../../pages/NEWS/mediainterview/mediainterview';
import { ProductsgroupsPage        } from '../../pages/NEWS/productsgroups/productsgroups';
import { ProductPresentationsPage  } from '../../pages/NEWS/product-presentations/product-presentations';
import { DataGlancePage            } from '../../pages/BYK/data-glance/data-glance';
import { FormPage                  } from '../../pages/form/form';
import { VideosPage                } from '../../pages/BYK/videos/videos';

// - Markets
import { DeCoatingsPage            } from '../../pages/MARKETS/de-coatings/de-coatings';
import { WoodFurniturePage         } from '../../pages/MARKETS/wood-furniture/wood-furniture';
import { TransportationPage        } from '../../pages/MARKETS/transportation/transportation';
import { MarineprotectivePage      } from '../../pages/MARKETS/marineprotective/marineprotective';
import { SpecialCoatingsPage       } from '../../pages/MARKETS/special-coatings/special-coatings';

// - Product Groups
import { WeetingDispersingPage     } from '../../pages/PRODUCTGROUPS/weeting-dispersing/weeting-dispersing';
import { WaxAdditivesPage          } from '../../pages/PRODUCTGROUPS/wax-additives/wax-additives';

// - Products & Solutions
import { TechnicalBroshuresPage    } from '../../pages/PRODUCTSSOLUTIONS/technical-broshures/technical-broshures';
import { TechDataSheetPage         } from '../../pages/PRODUCTSSOLUTIONS/tech-data-sheet/tech-data-sheet';
import { AdditivesGuidePage        } from '../../pages/PRODUCTSSOLUTIONS/additives-guide/additives-guide';
import { LapappVideosPage          } from '../../pages/PRODUCTSSOLUTIONS/lapapp-videos/lapapp-videos';
import { BrandsPage                } from '../../pages/PRODUCTSSOLUTIONS/brands/brands';


// COMPONENT
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('visibilityChanged', [
      state('true' , style({
          transform: 'translate3d(0, 0, 0)'})),
  state('false', style({ opacity: 0 })),
  transition('1 => 0', animate('200ms ')),
  transition('0 => 1', animate('200ms ')),
]),
    trigger('visibilityImgChanged', [
      state('true' , style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('1 => 0', animate('200ms ')),
      transition('0 => 1', animate('200ms ')),
    ])]
})


// EXPORT
export class HomePage {



  byknews           : Array <{ selected?: boolean, title: string, component: any, tabComponent?: any, index?: number }>;
  markets           : Array <{ selected?: boolean, title: string, component: any, tabComponent?: any, index?: number }>;
  productGroups     : Array <{ selected?: boolean, title: string, component: any, tabComponent?: any, index?: number }>;
  productssolutions : Array <{ selected?: boolean, title: string, component: any, tabComponent?: any, index?: number }>;

  slideContainer1:any = '';
  slideContainer2:any = false;
  slideContainer3:any = false;
  slideContainer4:any = false;

  slideBackface1:any = false;
  slideBackface2:any = false;
  slideBackface3:any = false;
  slideBackface4:any = false;

  backfaceIsOpened:boolean = false;

  pageName = null;

  pages: Array<{title: string, component: any,icon:string}>;

  wizzardStep:string = null;

  constructor(public navCtrl: NavController,public cFormService:ContentForm,public navParams: NavParams, public nav: Nav) {

    this.wizzardStep = cFormService.getWizzardStep();
    console.log('Hello ContentForm Provider');
    //navCtrlHome.setRoot(HomePage);
    this.pages = [
      { title: 'TEST', component: TabMainPage,icon: 'calendar' }];



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

  }


  navigateToPage( pageInstanceName ){
    console.log(this.navCtrl.getViews());
    this.navCtrl.push( pageInstanceName, {from: 'StartSeite', to:'Form', fromTab : false} );
  }

  shown:string = '';
  showImgC1:boolean =true;
  showImgC2:boolean =true;
  showImgC3:boolean =true;
  showImgC4:boolean =true;
  showImgC5:boolean =true;

  showbtnC1:boolean =true;
  showbtnC2:boolean =true;
  showbtnC3:boolean =true;
  showbtnC4:boolean =true;
  showbtnC5:boolean =true;

  resetBtn(card:string){
    switch(card){
      case "card1":
        this.showImgC2 = true;
        this.showbtnC2 = true;
        this.showImgC3 = true;
        this.showbtnC3 = true;
        this.showImgC4 = true;
        this.showbtnC4 = true;
        this.showImgC5 = true;
        this.showbtnC5 = true;
        break;
      case "card2":
        this.showImgC1 = true;
        this.showbtnC1 = true;
        this.showImgC3 = true;
        this.showbtnC3 = true;
        this.showImgC4 = true;
        this.showbtnC4 = true;
        this.showImgC5 = true;
        this.showbtnC5 = true;
        break;
      case "card3":
        this.showImgC1 = true;
        this.showbtnC1 = true;
        this.showImgC2 = true;
        this.showbtnC2 = true;
        this.showImgC4 = true;
        this.showbtnC4 = true;
        this.showImgC5 = true;
        this.showbtnC5 = true;
        break;
      case "card4":
        this.showImgC1 = true;
        this.showbtnC1 = true;
        this.showImgC2 = true;
        this.showbtnC2 = true;
        this.showImgC3 = true;
        this.showbtnC3 = true;
        this.showImgC5 = true;
        this.showbtnC5 = true;
        break;
      case "card5":
        this.showImgC1 = true;
        this.showbtnC1 = true;
        this.showImgC2 = true;
        this.showbtnC2 = true;
        this.showImgC3 = true;
        this.showbtnC3 = true;
        this.showImgC4 = true;
        this.showbtnC4 = true;
        break;
    }
  }


  CardIsClicked(card :string){
    switch(card){
      case "card1":
        this.shown = 'card1';
        this.showImgC1 =false;
        this.showbtnC1 = false;
        this.resetBtn(card);
        break;
      case "card2":
        this.shown = 'card2';
        this.showImgC2 =false;
        this.showbtnC2 = false;
        this.resetBtn(card);
        break;
      case "card3":
        this.shown = 'card3';
        this.showImgC3 =false;
        this.showbtnC3 = false;
        this.resetBtn(card);
        break;
      case "card4":
        this.shown = 'card4';
        this.showImgC4 =false;
        this.showbtnC4 = false;
        this.resetBtn(card);
        break;
      case "card5":
        this.shown = 'card5';
        this.showImgC5 =false;
        this.showbtnC5 = false;
        this.resetBtn(card);
        break;
    }
  }
  CardIsClickedBack(card :string){
    switch(card){
      case "card1":
        this.shown = '';
        this.showImgC1 =true;
        this.showbtnC1 = true;
        break;
      case "card2":
        this.shown = '';
        this.showImgC2 =true;
        this.showbtnC2 = true;
        break;
      case "card3":
        this.shown = '';
        this.showImgC3 = true;
        this.showbtnC3 = true;
        break;
      case "card4":
        this.shown = '';
        this.showImgC4 = true;
        this.showbtnC4 = true;
        break;
      case "card5":
        this.shown = '';
        this.showImgC5 = true;
        this.showbtnC5 = true;
        break;
    }
  }

  closeEverything(){
    this.backfaceIsOpened = false;
    this.slideBackface1  = '';
    this.slideBackface2  = '';
    this.slideBackface3  = '';
    this.slideBackface4  = '';
    this.slideContainer1 = '';
    this.slideContainer2 = '';
    this.slideContainer3 = '';
    this.slideContainer4 = '';
  }

  openSlideContainer1(){

    if( this.backfaceIsOpened && this.slideBackface1 ){
      this.closeEverything();
      this.backfaceIsOpened = false;
    } else {
      this.slideBackface1   = 'right';
      this.slideBackface2   = '';
      this.slideBackface3   = '';
      this.slideBackface4   = '';

      this.slideContainer1  = '';
      this.slideContainer2  = 'right';
      this.slideContainer3  = 'right';
      this.slideContainer4  = 'right';

      this.backfaceIsOpened = true;
    }
  }

  openSlideContainer2(){
    if( this.backfaceIsOpened && this.slideBackface2 ){
      this.closeEverything();
      this.backfaceIsOpened = false;
    } else {
      this.slideBackface1   = '';
      this.slideBackface2   = 'right';
      this.slideBackface3   = '';
      this.slideBackface4   = '';

      this.slideContainer1  = '';
      this.slideContainer2  = '';
      this.slideContainer3  = 'right';
      this.slideContainer4  = 'right';

      this.backfaceIsOpened = true;
    }
  }

  openSlideContainer3(){
    if( this.backfaceIsOpened && this.slideBackface3 ){
      this.closeEverything();
      this.backfaceIsOpened = false;
    } else {
      this.slideBackface1   = false;
      this.slideBackface2   = false;
      this.slideBackface3   = 'left';
      this.slideBackface4   = false;

      this.slideContainer1  = 'left';
      this.slideContainer2  = 'left';
      this.slideContainer3  = false;
      this.slideContainer4  = false;

      this.backfaceIsOpened = true;
    }
  }

  openSlideContainer4(){
    if( this.backfaceIsOpened && this.slideBackface4 ){
      this.closeEverything();
      this.backfaceIsOpened = false;
    } else {
      this.slideBackface1   = false;
      this.slideBackface2   = false;
      this.slideBackface3   = false;
      this.slideBackface4   = 'left';

      this.slideContainer1  = 'left';
      this.slideContainer2  = 'left';
      this.slideContainer3  = 'left';
      this.slideContainer4  = false;

      this.backfaceIsOpened = true;
    }
  }


  openPage(page) {
    // navigate to the new page if it is not the current page
    if (page.index) {

      this.closeEverything();
      //this.nav.setRoot( page.component, { tabIndex : page.index, testData : page.title, selected: page.selected } );
      this.nav.setRoot( page.component, { tabIndex : page.index, testData : page.title, selected: page.selected } );


    } else {
      /*  this.nav.setRoot(page.component).catch(() => {

       console.log("Didn't set nav root");
       }); */
      // this.nav.setRoot(page.component);

      this.nav.push(page.component, true);
    }
  }
}
