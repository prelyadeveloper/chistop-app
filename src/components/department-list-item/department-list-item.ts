import { Component } from '@angular/core';
import {Input} from "@angular/core";
import {HostBinding} from "@angular/core";
import {NavController} from "ionic-angular";
import {DepartmentListMapPage} from "../../pages/department-list-map/department-list-map";

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
  @Input() cityId;
  @Input() dep;
// @HostBinding();
  constructor(private nav: NavController) {
    console.log('Hello DepartmentListItemComponent Component');
    this.text = 'Hello World';
  }


  goToMap(){

     this.nav.push(DepartmentListMapPage,{city:this.cityId, dep:this.dep.depId});
  }

}
