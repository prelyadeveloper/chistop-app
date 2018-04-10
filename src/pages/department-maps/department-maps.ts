import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CategoriesProvider} from "../../providers/categories/categories";
import {FormGroup, FormBuilder} from "@angular/forms";

/**
 * Generated class for the DepartmentMapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-department-maps',
  templateUrl: 'department-maps.html',
})
export class DepartmentMapsPage {

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

    this.departments = this.catPr.getDepartmentsById(this.cities[0].id);

      this.myForm.valueChanges.subscribe(value => {
          this.departments = this.catPr.getDepartmentsById(value.mapStyle);
      });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepartmentMapsPage');
  }

}
