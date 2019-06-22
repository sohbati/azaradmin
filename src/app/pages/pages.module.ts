import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PagesComponent, 
    DashboardComponent,
    PageNotFoundComponent,],

  imports: [
    CommonModule,
    PagesRoutingModule,
      ]
}) 
export class PagesModule {
  
 }
