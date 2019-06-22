import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule),
    // canLoad: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule),
    data: { preload: true }
  },
  // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
