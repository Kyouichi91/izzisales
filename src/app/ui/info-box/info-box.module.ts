import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoBoxComponent } from './info-box.component';

const  declarations = [
  InfoBoxComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: declarations,
  exports: declarations

})
export class InfoBoxModule {}
