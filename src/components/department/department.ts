import { Component } from '@angular/core';
import {Input} from "@angular/core";

/**
 * Generated class for the DepartmentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'department',
  templateUrl: 'department.html'
})
export class DepartmentComponent {

  text: string;
  @Input() item;

  constructor() {
    console.log('Hello DepartmentComponent Component');
    this.text = 'Hello World';
  }

}
