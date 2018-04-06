import { Component } from '@angular/core';
import {Input, Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

/**
 * Generated class for the SelectCategoriesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'select-categories',
  templateUrl: 'select-categories.html'
})
export class SelectCategoriesComponent {

  @Input() categories;
  @Output() CatSelect = new EventEmitter();
  text: string;

  constructor() {
    console.log('Hello SelectCategoriesComponent Component');
    this.text = 'Hello World';
  }

    selectCat(id: number){
    this.CatSelect.emit(id);
    }


}
