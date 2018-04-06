import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {OrderPage} from "../order/order";
import {ActionsPage} from "../actions/actions";
import {HomePage} from "../home/home";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  ActionsPage = ActionsPage;

  HomePage = HomePage;

    OrderPage = OrderPage;
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
