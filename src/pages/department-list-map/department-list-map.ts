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
    popup;
    Popup;
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

        // this.map = new google.maps.Map(document.getElementById('map'), {
        //     center: {lat: -33.9, lng: 151.1},
        //     zoom: 10,
        // });



        let latLng = new google.maps.LatLng( this.cityCoordinates.lat,this.cityCoordinates.ln);

        let mapOptions = {
            center: latLng,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        this.popup = new Popup(
            new google.maps.LatLng(49.868581,24.057544),
            document.getElementById('content'));
        this.popup.setMap( this.map);
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

var Popup = function(position, content) {
    this.position = position;


    content.classList.add('popup-bubble-content');

    var pixelOffset = document.createElement('div');
    pixelOffset.classList.add('popup-bubble-anchor');
    pixelOffset.appendChild(content);

    this.anchor = document.createElement('div');
    this.anchor.classList.add('popup-tip-anchor');
    this.anchor.appendChild(pixelOffset);

    // Optionally stop clicks, etc., from bubbling up to the map.
    //  this.stopEventPropagation();
};
// NOTE: google.maps.OverlayView is only defined once the Maps API has
// loaded. That is why Popup is defined inside initMap().
Popup.prototype = Object.create(google.maps.OverlayView.prototype);

/** Called when the popup is added to the map. */
Popup.prototype.onAdd = function() {
    this.getPanes().floatPane.appendChild(this.anchor);
};

/** Called when the popup is removed from the map. */
Popup.prototype.onRemove = function() {
    if (this.anchor.parentElement) {
        this.anchor.parentElement.removeChild(this.anchor);
    }
};

/** Called when the popup needs to draw itself. */
Popup.prototype.draw = function() {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
    // Hide the popup when it is far out of view.
    var display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
            'block' :
            'none';

    if (display === 'block') {
        this.anchor.style.left = divPosition.x + 'px';
        this.anchor.style.top = divPosition.y + 'px';
    }
    if (this.anchor.style.display !== display) {
        this.anchor.style.display = display;
    }
};

/** Stops clicks/drags from bubbling up to the map. */
Popup.prototype.stopEventPropagation = function() {
    var anchor = this.anchor;
    anchor.style.cursor = 'auto';

    ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart',
        'pointerdown']
        .forEach(function(event) {
            anchor.addEventListener(event, function(e) {
                e.stopPropagation();
            });
        });
};
