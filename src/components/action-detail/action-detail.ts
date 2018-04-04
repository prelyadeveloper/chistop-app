import { Component } from '@angular/core';

/**
 * Generated class for the ActionDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'action-detail',
  templateUrl: 'action-detail.html'
})
export class ActionDetailComponent {

  text: string;

  constructor() {
    console.log('Hello ActionDetailComponent Component');
    this.text = 'Hello World';
  }

}
