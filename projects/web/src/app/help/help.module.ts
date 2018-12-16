import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { SellerComponent } from './seller/seller.component';

@NgModule({
  declarations: [
    HelpComponent,
    SellerComponent
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,
  ],
})
export class HelpModule { }
