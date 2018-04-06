import { Component } from '@angular/core';
import { Input, Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

/**
 * Generated class for the SelectSubcategoriesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'select-subcategories',
  templateUrl: 'select-subcategories.html'
})
export class SelectSubcategoriesComponent {

  text: string;
  @Output() goBack = new EventEmitter()
  @Input() service;
  @Output() ItemChose = new EventEmitter();

  constructor() {
    console.log('Hello SelectSubcategoriesComponent Component');
    this.text = 'Hello World';
  }

  back(){
    this.goBack.emit(null);
  }

  choseItem(item){
    this.ItemChose.emit(item);
  }



}
