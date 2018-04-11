import { Component } from '@angular/core';
import {Input} from "@angular/core";

/**
 * Generated class for the DepartmentListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'department-list-item',
  templateUrl: 'department-list-item.html'
})
export class DepartmentListItemComponent {

  text: string;

  @Input() dep;

  constructor() {
    console.log('Hello DepartmentListItemComponent Component');
    this.text = 'Hello World';
  }

}
