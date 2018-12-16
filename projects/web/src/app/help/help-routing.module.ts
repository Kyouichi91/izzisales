import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HelpComponent} from './help.component';
import {SellerComponent} from './seller/seller.component';

const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
    children: [
      {
        path: '',
        redirectTo: 'seller',
        pathMatch: 'full'
      },
      {
        path: 'seller',
        component: SellerComponent
      },
      {
        path: 'buyer',
        loadChildren: '',
      },
      {
        path: 'contact-us',
        loadChildren: '',
      },
      {
        path: 'reviews',
        loadChildren: '',
      },
      {
        path: 'about-us',
        loadChildren: '',
      },
      {
        path: 'privacy-notice',
        loadChildren: '',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule {
}
