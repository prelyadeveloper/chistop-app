import { Directive } from '@angular/core';


import {EventEmitter} from "@angular/core";
import {Output} from "@angular/core";
import {HostListener} from "@angular/core";

/**
 * Generated class for the OutsideClickDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[outside-click]' // Attribute selector
})
export class OutsideClickDirective {

    // @Input('appOutsideClick') aa;
    constructor() {

alert(3);
    }



    @Output()
    public clickOutside = new EventEmitter();

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        // const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        // if (!clickedInside && this.aa === 'show') {
            this.clickOutside.emit('s');

        // }
    }


}


