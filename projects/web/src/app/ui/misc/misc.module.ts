import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule, InputModule, CheckboxModule, RoundCheckboxModule } from '@shared-app/form';
import {RadioGroupModule} from '@shared-app/form/radio-group/radio-group.module';
import { ReactiveFormsModule } from '@angular/forms';
import {InfoBoxModule} from '@shared-app/ui/info-box/info-box.module';
import { MiscComponent } from './misc.component';

@NgModule({
  declarations: [
    MiscComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputModule,
    CheckboxModule,
    RoundCheckboxModule,
    RadioGroupModule,
    FormsModule,
    ReactiveFormsModule,
    InfoBoxModule
  ],
})
export class MiscModule { }
