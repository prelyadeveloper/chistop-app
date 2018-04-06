import { Component } from '@angular/core';
import {PopoverPage} from "../../pages/popover/popover";
import {PopoverController} from "ionic-angular";

/**
 * Generated class for the BurgerMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'burger-menu',
  templateUrl: 'burger-menu.html'
})
export class BurgerMenuComponent {



  constructor(public popoverCtrl: PopoverController) {

  }

    presentPopover(myEvent) {
        // alert(3);
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present({
            ev: myEvent
        });
    }

}
