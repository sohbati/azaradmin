
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
     children: [
       {path: '',component: DashboardComponent,},
       {path: 'dashboard', component: DashboardComponent,}
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
