import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ui',
    pathMatch: 'full'
  },

  {
    path: 'help',
    loadChildren: './help/help.module#HelpModule'
  },

  {
    path: 'ui',
    loadChildren: './ui/ui.module#UiModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
