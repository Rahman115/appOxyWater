import { BrowserModule } from 'angular2/platform-browser';
import { ErrorHandler, NgModule } from 'angular2/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular4';
import { SplashScreen } from 'ionic-native2/splash-screen';
import { StatusBar } from 'ionic-native2/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from 'angular4/http';

import { TabsPage } from '../pages/tabs/tabs';
import { TransaksiPage } from '../pages/transaksi/transaksi';
import { UserPage } from '../pages/user/user';
import { PesanPage } from '../pages/pesan/pesan';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { IonicStorageModule } from 'ionic2/storage';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    TransaksiPage,
    UserPage,
    LoginPage,
    SignupPage,
    PesanPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {tabsHideOnSubPages: true}),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    TransaksiPage,
    UserPage,
    LoginPage,
    SignupPage,
    PesanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
