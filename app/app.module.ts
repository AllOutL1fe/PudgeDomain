import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponentShop } from './app.component';

//@NgModule({
//  declarations: [

//    NavMenuComponent,
//    HomeComponent,
//    CounterComponent,
//    FetchDataComponent
//  ],
//  imports: [
//    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
//    HttpClientModule,
//    FormsModule,
//    RouterModule.forRoot([
//      { path: '', component: HomeComponent, pathMatch: 'full' },
//      { path: 'counter', component: CounterComponent },
//      { path: 'fetch-data', component: FetchDataComponent },
//    ]),
//    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
//  ],
//  providers: [],

//})
//export class AppModule { }
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponentShop],
  bootstrap: [AppComponentShop]
})
export class AppModuleShop { }
