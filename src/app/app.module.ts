// IMPORTS
import { NgModule,
         ErrorHandler             } from '@angular/core';
import { IonicApp,
         IonicModule,
         IonicErrorHandler        } from 'ionic-angular';
import { MyApp                    } from './app.component';
import { HomePage                 } from '../pages/home/home';
import { FormPage                 } from '../pages/form/form';
import { VideosPage               } from '../pages/BYK/videos/videos';
import { TabMainPage              } from '../pages/tab-main/tab-main';
import { VideomodalPage           } from '../pages/videomodal/videomodal';
import { PdfmodalPage             } from '../pages/pdfmodal/pdfmodal';
import { EbooksPage               } from '../pages/ebooks/ebooks';
import { ShowNewsPage             } from '../pages/NEWS/shownews/shownews';
import { DataGlancePage           } from '../pages/BYK/data-glance/data-glance';
import { PicmodalPage             } from '../pages/picmodal/picmodal';
import { MediainterviewPage       } from '../pages/NEWS/mediainterview/mediainterview';
import { NewproductsPage          } from '../pages/NEWS/newproducts/newproducts';
import { ProductoverviewPage      } from '../pages/NEWS/productoverview/productoverview';
import { ProductModalsPage        } from '../pages/product-modals/product-modals';
import { ProductOVDetailsPage     } from '../pages/product-ov-details/product-ov-details';
import { ProductPresentationsPage } from '../pages/NEWS/product-presentations/product-presentations';

// - Products Group
import { WaxAdditivesPage         } from  '../pages/PRODUCTGROUPS/wax-additives/wax-additives';
import { WeetingDispersingPage    } from  '../pages/PRODUCTGROUPS/weeting-dispersing/weeting-dispersing';
import { ProductsgroupsPage       } from  '../pages/NEWS/productsgroups/productsgroups';
// - Market
import{ DeCoatingsPage            } from '../pages/MARKETS/de-coatings/de-coatings';
import{ WoodFurniturePage         } from '../pages/MARKETS/wood-furniture/wood-furniture';
import{ TransportationPage        } from '../pages/MARKETS/transportation/transportation';
import{ MarineprotectivePage      } from '../pages/MARKETS/marineprotective/marineprotective';
import{ SpecialCoatingsPage       } from '../pages/MARKETS/special-coatings/special-coatings';
// - Products Solutions
import { TechnicalBroshuresPage   } from '../pages/PRODUCTSSOLUTIONS/technical-broshures/technical-broshures';
import { TechDataSheetPage        } from '../pages/PRODUCTSSOLUTIONS/tech-data-sheet/tech-data-sheet';
import { AdditivesGuidePage       } from '../pages/PRODUCTSSOLUTIONS/additives-guide/additives-guide';
import { LapappVideosPage         } from '../pages/PRODUCTSSOLUTIONS/lapapp-videos/lapapp-videos';
import { BrandsPage               } from '../pages/PRODUCTSSOLUTIONS/brands/brands';
// - Services
import { ContentForm              } from '../providers/content-form';
import { UtilityService           } from '../providers/utility-service';
import { OrderBy                  } from '../providers/orderBy';
import { OrderByLit                  } from '../providers/OrderByLit';

import{ProductSearchModalPage} from '../pages/product-search-modal/product-search-modal';
import{UnitSearchModalPage} from '../pages/unit-search-modal/unit-search-modal';
import{LiteratureSearchModalPage} from '../pages/literature-search-modal/literature-search-modal';

// MODULE
@NgModule( {
  declarations    : [
    MyApp,
    HomePage,
    FormPage,
    VideosPage,
    TabMainPage,
    VideomodalPage,
    PdfmodalPage,
    EbooksPage,
    ProductsgroupsPage,
    ShowNewsPage,
    DataGlancePage,
    PicmodalPage,
    ProductoverviewPage,
    ProductsgroupsPage,
    NewproductsPage,
    MediainterviewPage,
    DeCoatingsPage,
    WoodFurniturePage,
    TransportationPage,
    MarineprotectivePage,
    SpecialCoatingsPage,
    TechnicalBroshuresPage,
    TechDataSheetPage,
    AdditivesGuidePage,
    LapappVideosPage,
    BrandsPage,
    ProductModalsPage,
    OrderBy,
    OrderByLit,
    ProductOVDetailsPage,
    WeetingDispersingPage,
    ProductPresentationsPage,
    WaxAdditivesPage,
    ProductSearchModalPage,
    UnitSearchModalPage,
    LiteratureSearchModalPage
  ],
  imports         : [
    IonicModule.forRoot( MyApp,
      { tabsPlacement  : 'top',
        iconMode       : 'ios',
        modalEnter     : 'modal-slide-in',
        modalLeave     : 'modal-slide-out',
        pageTransition : 'ios',
        platforms : {
          ios : {
            statusbarPadding : true
          }
        }
      }
    )
  ],
  bootstrap       : [ IonicApp ],
  entryComponents : [
    MyApp,
    HomePage,
    FormPage,
    VideosPage,
    TabMainPage,
    VideomodalPage,
    PdfmodalPage,
    EbooksPage,
    ProductsgroupsPage,
    ShowNewsPage,
    DataGlancePage,
    PicmodalPage,
    ProductoverviewPage,
    ProductsgroupsPage,
    NewproductsPage,
    MediainterviewPage,
    DeCoatingsPage,
    WoodFurniturePage,
    TransportationPage,
    MarineprotectivePage,
    SpecialCoatingsPage,
    TechnicalBroshuresPage,
    TechDataSheetPage,
    AdditivesGuidePage,
    LapappVideosPage,
    BrandsPage,
    ProductModalsPage,
    ProductOVDetailsPage,
    WeetingDispersingPage,
    ProductPresentationsPage,
    WaxAdditivesPage,
    ProductSearchModalPage,
    UnitSearchModalPage,
    LiteratureSearchModalPage
  ],
  providers       : [ { provide : ErrorHandler, useClass : IonicErrorHandler }, ContentForm, UtilityService ]
} )


// EXPORT
export class AppModule {}
