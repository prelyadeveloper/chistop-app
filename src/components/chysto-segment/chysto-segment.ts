import { Component } from '@angular/core';
import {Input} from "@angular/core";
import {FormGroup} from "@angular/forms";

/**
 * Generated class for the ChystoSegmentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chysto-segment',
  templateUrl: 'chysto-segment.html'
})
export class ChystoSegmentComponent {

  @Input() form:FormGroup;
  @Input() cities;

  constructor() {

  }

}
