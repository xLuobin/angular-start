import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './pages/entry/entry.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entry',
    pathMatch: 'full'
  },
  {
    path: 'entry',
    component: EntryComponent
  },
  {
    path: 'window-property',
    loadChildren: () => import('./pages/window-property/window-property.module').then(modules => modules.WindowPropertyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
