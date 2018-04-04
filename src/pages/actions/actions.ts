import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {PopoverPage} from "../popover/popover";
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
  constructor( public popoverCtrl: PopoverController) {
  }

    presentPopover(myEvent) {
      // alert(3);
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present({
            ev: myEvent
        });
    }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ActionsPage');
  // }

}
