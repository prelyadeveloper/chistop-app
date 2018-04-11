import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {ActionsPage} from "../pages/actions/actions";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ActionDetailComponent} from "../components/action-detail/action-detail";
import {PopoverPage} from "../pages/popover/popover";
import {ActionsComponent} from "../components/actions/actions";
import{LoginPage} from "../pages/login/login";
import {LogoComponent} from "../components/logo/logo";
import {SocialAuthComponent} from "../components/social-auth/social-auth";
import {RegistrationPage} from "../pages/registration/registration";
import {TabsPage} from "../pages/tabs/tabs";
import {BurgerMenuComponent} from "../components/burger-menu/burger-menu";
import {ActionDetailPage} from "../pages/action-detail/action-detail";
import {CustomSelectComponent} from "../components/custom-select/custom-select";
import {SelectCategoriesComponent} from "../components/select-categories/select-categories";
import {SelectSubcategoriesComponent} from "../components/select-subcategories/select-subcategories";
import {FormGroupComponent} from "../components/form-group/form-group";
import {ItemArrayComponent} from "../components/item-array/item-array";
import {ItemControllComponent} from "../components/item-controll/item-controll";
import {OrderPage} from "../pages/order/order";
import {InputNumberComponent} from "../components/input-number/input-number";
import {PricesPage} from "../pages/prices/prices";
import { PriceToOrderProvider } from '../providers/price-to-order/price-to-order';
import { CategoriesProvider } from '../providers/categories/categories';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OrderedPage} from "../pages/ordered/ordered";
import {OrderedItemComponent} from "../components/ordered-item/ordered-item";
import {OrderedItemPage} from "../pages/ordered-item/ordered-item";
import {DepartmentComponent} from "../components/department/department";
import {DepartmentPage} from "../pages/department/department";
import {CommmonButtonComponent} from "../components/commmon-button/commmon-button";
import {DepartmentMapsPage} from "../pages/department-maps/department-maps";
import {DepartmentListsPage} from "../pages/department-lists/department-lists";
import {DepartmentListItemComponent} from "../components/department-list-item/department-list-item";
import {DepartmentListMapPage} from "../pages/department-list-map/department-list-map";
import {Geolocation} from "@ionic-native/geolocation";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
      ActionDetailComponent,
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
      InputNumberComponent,
      PricesPage,
      OrderedPage,
      OrderedItemComponent,
      OrderedItemPage,
      DepartmentComponent,
      DepartmentPage,
      CommmonButtonComponent,
      DepartmentListsPage,
      DepartmentMapsPage,
      DepartmentListItemComponent,
      DepartmentListMapPage
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      PricesPage,
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
      InputNumberComponent,
      ActionDetailComponent,
      OrderedPage,
      OrderedItemComponent,
      OrderedItemPage,
      DepartmentComponent,
      DepartmentPage,
      CommmonButtonComponent,
      DepartmentListsPage,
      DepartmentMapsPage,
      DepartmentListItemComponent,
      DepartmentListMapPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PriceToOrderProvider,
    CategoriesProvider,
      Geolocation
  ]
})
export class AppModule {}
