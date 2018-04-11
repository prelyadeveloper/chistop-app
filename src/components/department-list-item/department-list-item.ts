import { Component } from '@angular/core';
import {Input} from "@angular/core";
import {HostBinding} from "@angular/core";

/**
 * Generated class for the DepartmentListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'department-list-item',
  templateUrl: 'department-list-item.html',
    host:{'[class.single-department]':'single-department'}
})
export class DepartmentListItemComponent {

  text: string;
  @Input() hideButton = true;

  @Input() dep;
// @HostBinding();
  constructor() {
    console.log('Hello DepartmentListItemComponent Component');
    this.text = 'Hello World';
  }

}
