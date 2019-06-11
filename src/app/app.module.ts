import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatTooltipModule } from '@angular/material';
import { CircularMenuComponent } from './menu/circular-menu/circular-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    CircularMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTooltipModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
