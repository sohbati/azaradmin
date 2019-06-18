import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatTooltipModule,
  MatSelectModule,MatTreeModule } from '@angular/material';
import { CircularMenuComponent } from './menu/circular-menu/circular-menu.component';
import { FormsModule } from '@angular/forms';
import { MenuTreeComponent } from './menu/menu-tree/menu-tree.component';
import {MenuService} from "./menu/menu-tree/menu.service";

@NgModule({
  declarations: [
    AppComponent,
    CircularMenuComponent,
    MenuTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTooltipModule,
    MatSelectModule,  
    MatTreeModule,

    
	
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
