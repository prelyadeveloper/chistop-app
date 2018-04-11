import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ElementRef, ViewChild} from "@angular/core";
declare var google;
import {CategoriesProvider} from "../../providers/categories/categories";

/**
 * Generated class for the DepartmentListMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-department-list-map',
  templateUrl: 'department-list-map.html',
})
export class DepartmentListMapPage {

    @ViewChild('map') mapElement: ElementRef;
    map: any;
    id;
    department;
  constructor(public navCtrl: NavController
              , public navParams: NavParams,
              private catPr: CategoriesProvider
  ) {

      let cityId = this.navParams.get('city');
      let depId = this.navParams.get('dep');


     this.department = this.catPr.getDepartmentByCityAndDepId(cityId, depId);
  }

    loadMap(){

        let latLng = new google.maps.LatLng(this.department.coordinates.lat,this.department.coordinates.ln);

        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }

  ionViewDidLoad() {
      this.loadMap();
  }

}
