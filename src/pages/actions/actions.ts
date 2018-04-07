import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import {HomePage} from "../home/home";


/**
 * Generated class for the ActionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actions',
  templateUrl: 'actions.html',
})
export class ActionsPage {

    HomePage = HomePage;
  constructor( ) {

  }





  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ActionsPage');
  // }

}
