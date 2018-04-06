import { Component } from '@angular/core';
import {ItemArrayComponent} from "../item-array/item-array";
import {FormArray,FormControl,FormBuilder, FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";

import {Input} from "@angular/core";

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
    overallSum = 0;

    @Input() services;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        //
        var services = [{id:1,name:'Головний убір, шарф, рукавиці, хустина',price:'22',amount:2},
            {id:2,name:'Головний убір, шарф, рукавиці, хустина',price:'42',amount:1}];

        // var services = [{id:null,name:null,price:0,amount:0}]
        // build the form model
        this.myForm = this.fb.group({
            services: ItemArrayComponent.buildItems(services)
        })

        this.myForm.get('services').valueChanges.subscribe(value => {

            this.overallSum= 0;
            (this.myForm.get('services') as FormArray).controls.forEach(value => {
               this.overallSum += parseInt((value as FormGroup).controls['price'].value) * parseInt((value as FormGroup).controls['amount'].value);
            });
        })
    }

    submit() {


    }

}
