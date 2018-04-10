import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CategoriesProvider} from "../../providers/categories/categories";
import {OrderedItemPage} from "../ordered-item/ordered-item";

/**
 * Generated class for the OrderedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordered',
  templateUrl: 'ordered.html',
})
export class OrderedPage {

  orderedSrv;
  constructor(public navCtrl: NavController, public navParams: NavParams, private catPrv: CategoriesProvider) {

    this.orderedSrv = this.catPrv.getOrderedList();

  }

    goTo(id){

        this.navCtrl.push(OrderedItemPage,{'ordered-id':id})
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderedPage');
  }

}
