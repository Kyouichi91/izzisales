import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

const  declarations = [
  HeaderComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: declarations,
  exports: declarations

})
export class HeaderModule {}
