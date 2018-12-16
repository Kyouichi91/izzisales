import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsComponent } from './components.component';
import {DropdownModule} from '@shared-app/ui/dropdown/dropdown.module';
import {FormsModule} from '@angular/forms';

const  declarations = [
  ComponentsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ],
  declarations: declarations,
  exports: declarations

})
export class ComponentsModule {}
