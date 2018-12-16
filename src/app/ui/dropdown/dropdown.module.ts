import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown.component';
import {MatSelectModule} from '@angular/material';

const  declarations = [
  DropdownComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule
  ],
  declarations: declarations,
  exports: declarations

})
export class DropdownModule {}
