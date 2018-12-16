import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponent } from './ui.component';
import { UiRoutingModule } from './ui-routing.module';
import { ComponentsModule } from './components/components.module';
import { TypographyComponent } from './typography/typography.component';
import { MiscModule } from './misc/misc.module';

@NgModule({
  declarations: [
    UiComponent,
    TypographyComponent,
  ],
  imports: [
    CommonModule,
    UiRoutingModule,
    MiscModule,
    ComponentsModule
  ],
})
export class UiModule { }
