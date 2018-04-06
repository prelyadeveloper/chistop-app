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
import {TabsPage} from "../pages/tabs/tabs";
import {BurgerMenuComponent} from "../components/burger-menu/burger-menu";
import {ActionDetailPage} from "../pages/action-detail/action-detail";
import {OutsideClickDirective} from "../directives/outside-click/outside-click";
import {CustomSelectComponent} from "../components/custom-select/custom-select";
import {SelectCategoriesComponent} from "../components/select-categories/select-categories";
import {SelectSubcategoriesComponent} from "../components/select-subcategories/select-subcategories";
import {FormGroupComponent} from "../components/form-group/form-group";
import {ItemArrayComponent} from "../components/item-array/item-array";
import {ItemControllComponent} from "../components/item-controll/item-controll";
import {OrderPage} from "../pages/order/order";
import {InputNumberComponent} from "../components/input-number/input-number";

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
      RegistrationPage,
      TabsPage,
      BurgerMenuComponent,
      ActionDetailPage,
      CustomSelectComponent,
      SelectCategoriesComponent,
      SelectSubcategoriesComponent,
      FormGroupComponent,
      ItemArrayComponent,
      ItemControllComponent,
      OrderPage,
      InputNumberComponent
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
      RegistrationPage,
      TabsPage,
      BurgerMenuComponent,
      ActionDetailPage,
      CustomSelectComponent,
      SelectCategoriesComponent,
      SelectSubcategoriesComponent,
      FormGroupComponent,
      ItemArrayComponent,
      ItemControllComponent,
      OrderPage,
      InputNumberComponent

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
