import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DepartmentListsPage} from "../department-lists/department-lists";
import {DepartmentMapsPage} from "../department-maps/department-maps";

/**
 * Generated class for the DepartmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-department',
  templateUrl: 'department.html',
})
export class DepartmentPage {

  mapPage = DepartmentMapsPage;
  listPage = DepartmentListsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepartmentPage');
  }


  goTo(page){

    this.navCtrl.push(page);
  }

}
