import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ButtonComponent} from '@shared-app/form/button/button.component';

const  declarations = [
  ButtonComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ],
  declarations: declarations,
  exports: declarations

})
export class ButtonModule {}
