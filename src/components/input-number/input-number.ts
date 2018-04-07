import { Component } from '@angular/core';
import {Input, Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

/**
 * Generated class for the InputNumberComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'input-number',
  templateUrl: 'input-number.html'
})
export class InputNumberComponent {

  @Input() controlName;
  @Input() disable;
  @Input() initValue = 0;
  @Output() ChangeValue = new EventEmitter();

    constructor() {}

    plus(element: HTMLInputElement){
        (element.value as any)++;
        this.valueChange(element.value);

    }
    minus(element: HTMLInputElement){
        if(parseInt(element.value) > 0){
            (element.value as any)--;
            this.valueChange(parseInt(element.value));
        }
    }

    valueChange(value){
        this.ChangeValue.emit(value);
    }


}
