
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const pagesRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  }, 
  {path: '',component: DashboardComponent,},
  {path: '**',component: PageNotFoundComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
