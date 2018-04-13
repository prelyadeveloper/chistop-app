import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoriesProvider} from "../../providers/categories/categories";

/**
 * Generated class for the DepartmentListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-department-lists',
  templateUrl: 'department-lists.html',
})
export class DepartmentListsPage {

    cityModel: string = "puppies";
    cities;
    myForm: FormGroup;
    departments;


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private catPr: CategoriesProvider,
                private fb: FormBuilder) {

        this.cities = this.catPr.getDepartmentsCities();

        this.myForm = this.fb.group({
            mapStyle:[this.cities[0].id]
        });

        this.departments = this.catPr.getDepartmentsByCityId(this.cities[0].id);

        console.log(this.departments);
        this.myForm.valueChanges.subscribe(value => {
            this.departments = this.catPr.getDepartmentsByCityId(value.mapStyle);
        });


    }

    getCities(i){

// console.log(i)
        return  this.cities.splice( i*4 ,4);

    }
    round(value){

        var arr = []
        for(var i = 0; i<= Math.ceil(value); i++){
            arr.push(i)
        }
        return arr;
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad DepartmentMapsPage');
    }

}
