import { Component } from '@angular/core';

/**
 * Generated class for the SocialAuthComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'social-auth',
  templateUrl: 'social-auth.html'
})
export class SocialAuthComponent {

  text: string;

  constructor() {
    console.log('Hello SocialAuthComponent Component');
    this.text = 'Hello World';
  }

}
