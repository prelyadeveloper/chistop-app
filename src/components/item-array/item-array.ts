import { Component } from '@angular/core';
import {ItemControllComponent} from "../item-controll/item-controll";
import {FormArray} from "@angular/forms";
import {Input} from "@angular/core";

/**
 * Generated class for the ItemArrayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-array',
  templateUrl: 'item-array.html'
})
export class ItemArrayComponent {





    static buildItems( services) {
        let ar = new FormArray([]);
        services.forEach(service => {
            ar.push(  ItemControllComponent.buildItem(service.id, service.name, service.price))
        })
        return ar;
    }

    @Input()
    public itemsFormArray: FormArray;

    addItem() {
        this.itemsFormArray.push(ItemControllComponent.buildItem())
    }
}
