import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CategoriesProvider} from "../../providers/categories/categories";


/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  services;
  // savedServ = [{id:null,name:null,price:0,amount:0}];
  constructor(public navCtrl: NavController, public navParams: NavParams, public catPr: CategoriesProvider) {

      this.services = this.catPr.getServices();

  }
    ngAfterViewInit() {

  }
    ionViewWillEnter(){


    }







}
