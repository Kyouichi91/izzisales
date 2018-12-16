import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UiComponent} from './ui.component';
import {TypographyComponent} from './typography/typography.component';
import {MiscComponent} from './misc/misc.component';
import {ComponentsComponent} from './components/components.component';

const routes: Routes = [
  {
    path: '',
    component: UiComponent,
    children: [
      {
        path: 'typography',
        component: TypographyComponent
      },
      {
        path: 'components',
        component: ComponentsComponent
      },
      {
        path: 'misc',
        component: MiscComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule {
}
