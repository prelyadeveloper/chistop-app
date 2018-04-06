import { Component } from '@angular/core';
import {HostListener} from "@angular/core";
import {ElementRef} from "@angular/core";
import {ChangeDetectionStrategy} from "@angular/core";
import {Input} from "@angular/core";

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

    @Input() services;

    constructor(private _elementRef: ElementRef) {


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


    ItemChose(item){

        console.log(item);
    }
    CatSelect(id){
        this.selectedCat = id;
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
