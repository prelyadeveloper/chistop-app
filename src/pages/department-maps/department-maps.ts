import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CategoriesProvider} from "../../providers/categories/categories";
import {FormGroup, FormBuilder} from "@angular/forms";
import {DepartmentListMapPage} from "../department-list-map/department-list-map";

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

    this.departments = this.catPr.getDepartmentsByCityId(this.cities[0].id);

    console.log(this.departments);
      this.myForm.valueChanges.subscribe(value => {
          this.departments = this.catPr.getDepartmentsByCityId(value.mapStyle);
      });


  }
  goTo(cityId, depId){

      console.log(cityId);
      console.log(depId);
      this.navCtrl.push(DepartmentListMapPage,{city:cityId, dep:depId})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepartmentMapsPage');
  }

}
