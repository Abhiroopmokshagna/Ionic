import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomePage } from './home/home.page'
import { AboutPage } from './about/about.page';
import { MenuPage } from './menu/menu.page';
import { ContactPage } from './contact/contact.page';

import { DishService } from './services/dish.service';
import { LeaderService } from './services/leader.service';
import { PromotionService } from './services/promotion.service';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';

import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';
@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage
  ],
  entryComponents: [
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DishService,
    LeaderService,
    PromotionService,
    ProcessHttpmsgService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    { provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
