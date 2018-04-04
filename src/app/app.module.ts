import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {ActionsPage} from "../pages/actions/actions";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PopoverPage} from "../pages/popover/popover";
import {ActionsComponent} from "../components/actions/actions";
import{LoginPage} from "../pages/login/login";
import {LogoComponent} from "../components/logo/logo";
import {SocialAuthComponent} from "../components/social-auth/social-auth";
import {RegistrationPage} from "../pages/registration/registration";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
      ActionsPage,
      PopoverPage,
      ActionsComponent,
      LoginPage,
      LogoComponent,
      SocialAuthComponent,
      RegistrationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      ActionsPage,
      PopoverPage,
      LoginPage,
      LogoComponent,
      SocialAuthComponent,
      RegistrationPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
