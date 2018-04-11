import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ElementRef, ViewChild} from "@angular/core";
declare var google;
import {CategoriesProvider} from "../../providers/categories/categories";
import {Geolocation} from "@ionic-native/geolocation";

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
    userCoord;
    cityCoordinates;
  constructor(public navCtrl: NavController
              , public navParams: NavParams,
              private catPr: CategoriesProvider,
              private geolocation: Geolocation
  ) {
      let cityId = this.navParams.get('city');
      let depId = this.navParams.get('dep');

      this.geolocation.getCurrentPosition().then((resp) => {
           // resp.coords.latitude;
           // resp.coords.longitude;
           this.userCoord = resp;
      }).catch((error) => {
          console.log('Error getting location', error);
      });

      this.cityCoordinates = this.catPr.getCityCoordinates(cityId);
      this.department = this.catPr.getDepartmentByCityAndDepId(cityId, depId);
  }

    loadMap(){

        let latLng = new google.maps.LatLng( this.cityCoordinates.lat,this.cityCoordinates.ln);

        let mapOptions = {
            center: latLng,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        this.addMarker(new google.maps.LatLng(49.868581,24.057544),'../../assets/imgs/you_here.png');
        this.addMarker(new google.maps.LatLng(this.department.coordinates.lat,this.department.coordinates.ln),'../../assets/imgs/ic_location.png');
    }

    addMarker(position, icon){

        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: position,
            icon:icon
        });

        let content = "<h4>Information!</h4>";

        this.addInfoWindow(marker, content);
    }

    addInfoWindow(marker, content){

        let infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
        });

    }
      ionViewDidLoad() {
          this.loadMap();
      }

}
