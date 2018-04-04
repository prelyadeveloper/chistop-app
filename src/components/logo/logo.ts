import { Component } from '@angular/core';

/**
 * Generated class for the LogoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chysto-logo',
  templateUrl: 'logo.html'
})
export class LogoComponent {

  text: string;

  constructor() {
    console.log('Hello LogoComponent Component');
    this.text = 'Hello World';
  }

}
