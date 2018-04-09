import { Component } from '@angular/core';
import {ItemArrayComponent} from "../item-array/item-array";
import {FormArray,FormBuilder, FormGroup} from "@angular/forms";
import {ViewChild} from "@angular/core";
import {NavParams} from "ionic-angular";
import {Input} from "@angular/core";
import {Events} from "ionic-angular";

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

    @ViewChild(ItemArrayComponent) child = ItemArrayComponent;
    @Input() services;
    @Input() savedServ;

    constructor(private fb: FormBuilder, private params: NavParams, private events: Events) {}

    ngOnInit() {
        this.events.subscribe('savedSrv',(items,params) =>{

            this.removeArrayContr();

            setTimeout(()=>{
                this.addSavedItems(params);
            },50)

            this.events.publish('goToOrders');
        })

        this.myForm = this.fb.group({
            services: ItemArrayComponent.buildItems([{id:null,name:null,price:0, amount: 0}]),
            address:[]
        })

        this.myForm.controls['services'].valueChanges.subscribe(value => {
            this.overallSum = 0;
            (this.myForm.get('services') as FormArray).controls.forEach(value => {
               this.overallSum += parseInt((value as FormGroup).controls['price'].value) * parseInt((value as FormGroup).controls['amount'].value);
            });
        })
    }

    submit() {


    }

    removeArrayContr(){
        let length = this.getArrLength();
            for(var i = 0; i <= length; i++) {
                (this.myForm.controls['services'] as FormArray).removeAt(i-1);
        }
    }

    addSavedItems(serv){
        serv.forEach(value => {
            (this.child as any).addItem(value.id,value.name,value.price,value.amount);
        })
    }

    addItem(){

        (this.child as any).addItem(null,null,0,0);
    }

    ifCanAdd(){
        let contr = (this.myForm.controls['services'] as FormArray).controls[this.getArrLength() -1 ] as FormGroup;
        return  contr.controls.amount.value > 0 ;
    }


    getArrLength(){
        if((this.myForm.controls['services'] as FormArray)){
            return (this.myForm.controls['services'] as FormArray).length;
        } else{
            return 0;
        }

    }



}
