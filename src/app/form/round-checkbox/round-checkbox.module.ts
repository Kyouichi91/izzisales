import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoundCheckboxComponent } from './round-checkbox.component';
import {MatCheckboxModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

const  declarations = [
  RoundCheckboxComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule
  ],
  declarations: declarations,
  exports: declarations

})
export class RoundCheckboxModule {}
