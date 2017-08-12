import { Component } from 'angular2/core';
import { Platform } from 'ionic-angular4';
import { StatusBar } from 'ionic-native2/status-bar';
import { SplashScreen } from 'ionic-native2/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

