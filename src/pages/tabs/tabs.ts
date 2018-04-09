import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {ActionsPage} from "../actions/actions";
import {HomePage} from "../home/home";
import{ PricesPage} from "../prices/prices";
import { Events} from "ionic-angular";
import {OrderPage} from "../order/order";
import {ViewChild} from "@angular/core";

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

  @ViewChild('myTabs') tabs;
  ActionsPage = ActionsPage;
  PricesPage = PricesPage;
  HomePage = HomePage;
    OrderPage = OrderPage;
  constructor(private events: Events, private nav: NavController) {

      this.events.subscribe('goToOrders',() =>{
          this.tabs.select(2);
      })

  }


}
