import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCheckboxModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CheckboxComponent} from '@shared-app/form/checkbox/checkbox.component';

const  declarations = [
  CheckboxComponent,
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
export class CheckboxModule {}
