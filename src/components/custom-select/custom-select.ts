import { Component } from '@angular/core';
import {HostListener} from "@angular/core";
import {ChangeDetectionStrategy} from "@angular/core";
import {Input, Output} from "@angular/core";
import {EventEmitter} from "@angular/core";


/**
 * Generated class for the CustomSelectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-select',
  templateUrl: 'custom-select.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomSelectComponent {

    state = 'closed';

    selectedCat = null;
    _service;
    @Input() set service(value){

        if(value.name === null){
            this.input_inner = '<span>Пошук</span>'
        } else {
            this.setInnerHtml(value);
        }

    }

    input_inner;
    _services;
    @Output() SelectCat = new EventEmitter();
    @Input()  set services(value){
        this._services = value;
    };

    get services(){

        return this._services;
    }

    constructor() {

    }


    back(){
        this.selectedCat = null;
    }

    getServiceByid(id){
        return this.services.find(value => {
            return value.id === id;
        })
    }

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {

        if ( targetElement.className === 'select-overlay' && this.ifOpen()) {
          this.openSelect();
        }
    }


    ItemChose(item) {
        this.SelectCat.emit(item);
        this.setInnerHtml(item);
        this.openSelect();
         this.back();
    }
    CatSelect(id){
        this.selectedCat = id;
    }

    setInnerHtml(item){
        this.input_inner = '<span class="service-name">'+item.name.substr(0,14)+'...</span><span class="service-price">шт. '+item.price+'</span>';
    }

    openSelect() {
        this.state = this.state === 'closed' ? 'open' : 'closed';
    }

    ifOpen(){
        if(this.state === 'open') {
            return true;
        } else {
            return false;
        }
    }

}
