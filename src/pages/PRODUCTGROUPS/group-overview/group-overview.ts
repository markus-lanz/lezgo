// IMPORTS
import { Component      } from '@angular/core';
import { NavController,
         NavParams,
         Nav            } from 'ionic-angular'

import { TabMainPage              } from '../../../pages/tab-main/tab-main';
import { WeetingDispersingPage    } from '../../../pages/PRODUCTGROUPS/weeting-dispersing/weeting-dispersing';
import { WaxAdditivesPage         } from '../../../pages/PRODUCTGROUPS/wax-additives/wax-additives';
import { RheologyAdditivesPage    } from '../../../pages/PRODUCTGROUPS/rheology-additives/rheology-additives';
import { SurfaceAdditivesPage     } from '../../../pages/PRODUCTGROUPS/surface-additives/surface-additives';
import { DefoarmersPage           } from '../../../pages/PRODUCTGROUPS/defoarmers/defoarmers';
import { AdhesionPage             } from '../../../pages/PRODUCTGROUPS/adhesion/adhesion';
import { ProcessingPage           } from '../../../pages/PRODUCTGROUPS/processing/processing';
import { ViscosityPage            } from '../../../pages/PRODUCTGROUPS/viscosity/viscosity';


// COMPONENT
@Component( {
  selector    : 'page-group-overview',
  templateUrl : 'group-overview.html'
} )


// EXPORT
export class GroupOverviewPage {

  pagesInTabs = null;

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               public nav: Nav) {



    this.pagesInTabs = {

      // Product groups
      weetingdispersing    : { title: 'Wetting & Dispersing Additives',       selected: false, component: TabMainPage, tabComponent: WeetingDispersingPage,  index : 16 },
      surface              : { title: 'Surface Additives',                    selected: false, component: TabMainPage, tabComponent: SurfaceAdditivesPage,   index : 23 },
      rheology             : { title: 'Rheology Additives',                   selected: false, component: TabMainPage, tabComponent: RheologyAdditivesPage,  index : 22 },
      defoarmers           : { title: 'Defoamers & Air Release Additives',    selected: false, component: TabMainPage, tabComponent: DefoarmersPage,         index : 24 },
      waxadditives         : { title: 'Wax Additives',                        selected: false, component: TabMainPage, tabComponent: WaxAdditivesPage,       index : 17 },
      adhesion             : { title: 'Adhesion Promoters & Coupling Agents', selected: false, component: TabMainPage, tabComponent: AdhesionPage,           index : 25 },
      viscosity            : { title: 'Viscosity Reducers',                   selected: false, component: TabMainPage, tabComponent: ViscosityPage,          index : 26 },
      processing           : { title: 'Processing Additives',                 selected: false, component: TabMainPage, tabComponent: ProcessingPage,         index : 27 },
    };


  }


  navigateToPage(page) {
    this.nav.setRoot(page.component, {tabIndex: page.index, testData: page.title, selected: page.selected});
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupOverviewPage');
  }

}
