import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatTooltipModule,
  MatSelectModule,MatTreeModule, MatButtonModule, MatMenuModule, MatInputModule, MatCardModule } from '@angular/material';
import { CircularMenuComponent } from './menu/circular-menu/circular-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuTreeComponent } from './menu/menu-tree/menu-tree.component';
import {MenuService} from "./menu/menu-tree/menu.service";
import { PagesModule } from './pages/pages.module';
import { CdkTreeModule } from '@angular/cdk/tree';
import { LoginComponent } from './auth/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { fakeBackendProvider } from './auth/helper/fake-backend';
import { JwtInterceptor } from './auth/helper/jwt.interceptor';
import { ErrorInterceptor } from './auth/helper/error.interceptor';
import { RegisterComponent } from './auth/register/register.component';
import { AlertComponent } from './auth/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    CircularMenuComponent,
    MenuTreeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTooltipModule,
    MatSelectModule,  
    MatTreeModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    
    CdkTreeModule,
    PagesModule,
    
	
  ],
  providers: [
    MenuService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
