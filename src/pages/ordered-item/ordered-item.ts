import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CategoriesProvider} from "../../providers/categories/categories";

/**
 * Generated class for the OrderedItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordered-item',
  templateUrl: 'ordered-item.html',
})
export class OrderedItemPage {
  item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private catPrv: CategoriesProvider) {

    this.item = this.catPrv.getOrderedItem(this.navParams.get('ordered-id'));
    console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderedItemPage');
  }

}
