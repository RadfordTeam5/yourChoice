import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { Welcome } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { Login } from '../pages/login/login';
import { BeaconProvider } from '../providers/beacon-provider/beacon-provider';
import { IBeacon } from '@ionic-native/ibeacon';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html',
  providers: [
    BeaconProvider,
    IBeacon
  ]
})
export class MyApp {
  rootPage:any = Login;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
