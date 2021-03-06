import { Component } from '@angular/core';
import {Input, Output} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";
import {EventEmitter} from "@angular/core";
import {scaleAnimation} from "../../animations/router.animations";

/**
 * Generated class for the ItemControllComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-controll',
  templateUrl: 'item-controll.html',
    animations: [

        scaleAnimation()
    ]
})
export class ItemControllComponent {

    @Input()
    public index: number;

    @Input() services;

    @Input()
    public item: FormGroup;

    @Output()
    public removed: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

      getControllValue(name){
              return  this.item.controls[name].value;
      }

    SelectCat(item){
        this.item.controls['id'].setValue(item.id);
        this.item.controls['name'].setValue(item.name);
        this.item.controls['price'].setValue(item.price);
        this.item.controls['amount'].setValue(1);
    }

    ChangeValue(amount) {
        this.item.controls['amount'].setValue(amount);
    }

    ifZero() {
        return this.item.controls['amount'].value === 0 &&  this.item.controls['price'].value === null;
    }

    ifCanChange() {
      return this.getControllValue('price') !== 0;
    }

    static buildItem(id: number , name: string, price:number, amount: number) {
        return new FormGroup({
            id: new FormControl(id),
            name: new FormControl(name),
            price: new FormControl(price),
            amount:new FormControl(amount)
        })
    }

}
