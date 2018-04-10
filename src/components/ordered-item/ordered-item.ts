import { Component, Input } from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the OrderedItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ordered-item',
  templateUrl: 'ordered-item.html'
})
export class OrderedItemComponent {

  text: string;
  @Input() item;

  constructor(private nav: NavController) {
    console.log('Hello OrderedItemComponent Component');
    this.text = 'Hello World';
  }

    ifReady(item){
        return {'color':item.state ? '#4F4F4F' : '#27AE60'};
    }



}
