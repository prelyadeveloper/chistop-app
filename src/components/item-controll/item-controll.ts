import { Component } from '@angular/core';
import {Input, Output} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {EventEmitter} from "@angular/core";

/**
 * Generated class for the ItemControllComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-controll',
  templateUrl: 'item-controll.html'
})
export class ItemControllComponent {

    @Input()
    public index: number;

    @Input()
    public item: FormGroup;

    @Output()
    public removed: EventEmitter<number> = new EventEmitter<number>();

  constructor() {

  }


    static buildItem(id: number = null, name: string = null, price:number = null) {
        return new FormGroup({
            id: new FormControl(id),
            name: new FormControl(name),
            price: new FormControl(price)
        })
    }

}
