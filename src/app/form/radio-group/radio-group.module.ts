import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {RadioGroupComponent} from '@shared-app/form/radio-group/radio-group.component';
import {MatRadioModule} from '@angular/material';

const  declarations = [
  RadioGroupComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule
  ],
  declarations: declarations,
  exports: declarations

})
export class RadioGroupModule {}
