import { Component } from '@angular/core';
import {Input, Output} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {rotateTrans} from "../../animations/router.animations";

/**
 * Generated class for the InputNumberComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'input-number',
  templateUrl: 'input-number.html',
    animations:[
        rotateTrans()
    ]
})
export class InputNumberComponent {

  @Input() controlName;
  @Input() disable;
  @Input() initValue = 0;
  @Output() ChangeValue = new EventEmitter();
  @Input() CanChange = true;

    constructor() {}

    plus(element: HTMLInputElement){
        if(this.CanChange === true) {
            (element.value as any)++;
            this.valueChange(element.value);
        }
    }

    minus(element: HTMLInputElement){
        if(parseInt(element.value) > 0 && this.CanChange === true){
            (element.value as any)--;
            this.valueChange(parseInt(element.value));
        }
    }

    valueChange(value){
        this.ChangeValue.emit(value);
    }


}
