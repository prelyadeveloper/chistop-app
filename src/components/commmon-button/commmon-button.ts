import { Component } from '@angular/core';
import {Input} from "@angular/core";

/**
 * Generated class for the CommmonButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'commmon-button',
  templateUrl: 'commmon-button.html'
})
export class CommmonButtonComponent {


  @Input() text;
  @Input() bg;
  @Input() br;
  constructor() {
    console.log('Hello CommmonButtonComponent Component');

  }

}
