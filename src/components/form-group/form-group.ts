import { Component } from '@angular/core';
import {ItemArrayComponent} from "../item-array/item-array";
import {FormArray,FormControl,FormBuilder, FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";

/**
 * Generated class for the FormGroupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-groupp',
  templateUrl: 'form-group.html'
})
export class FormGroupComponent {

    myForm: FormGroup;
    // productTypes;

    constructor(
        private fb: FormBuilder,
    ) {



    }

    ngOnInit() {


        var services = [{id:1,name:'Головний убір, шарф, рукавиці, хустина',price:'22'},
            {id:1,name:'Головний убір, шарф, рукавиці, хустина',price:'22'}];
        // build the form model
        this.myForm = this.fb.group({
            services: ItemArrayComponent.buildItems(services)
        })
    }

    submit() {


    }

}
