import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {InputComponent} from '@shared-app/form/input/input.component';
import {MatInputModule} from '@angular/material';

const  declarations = [
  InputComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule
  ],
  declarations: declarations,
  exports: declarations

})
export class InputModule {}
