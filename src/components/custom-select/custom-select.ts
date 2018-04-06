import { Component } from '@angular/core';
import {HostListener} from "@angular/core";
import {ElementRef} from "@angular/core";
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

        if(this.input_inner !== null){
            this.setInnerHtml(value);
        }

    }

    input_inner = null;
    _services;
    @Output() SelectCat = new EventEmitter();
    @Input()  set services(value){
        this._services = value;
    };

    get services(){

        return this._services;
    }

    constructor(private _elementRef: ElementRef) {
        if(this.input_inner === null)
        this.input_inner = '<span>Пошук</span>'
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
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if ( targetElement.className === 'select-overlay') {
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
        this.input_inner = '<span class="service-name">'+item.name+'</span><span class="service-price">'+item.price+'</span>';
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
