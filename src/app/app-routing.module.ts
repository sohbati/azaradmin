import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule),
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
