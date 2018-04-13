import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CategoriesProvider} from "../../providers/categories/categories";
import {FormGroup, FormBuilder} from "@angular/forms";
import {DepartmentListMapPage} from "../department-list-map/department-list-map";
declare var google;
import {Events} from "ionic-angular";

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


    cities;
    myForm: FormGroup;
    departments;


    @ViewChild('map') mapElement: ElementRef;

    showPop = false;
    map: any;
    id;
    department;
    userCoord;
    cityCoordinates;
    popup;
    Popup;
    windowList = [];
    myid = 0;




    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private catPr: CategoriesProvider,
                private fb: FormBuilder,
                private event:Events) {




        this.cities = this.catPr.getDepartmentsCities();

        this.myForm = this.fb.group({
            mapStyle:[this.cities[0].id]
        });

         this.cityCoordinates = this.catPr.getCityCoordinates(this.cities[0].id);


        this.event.subscribe('marker-click', (id => {
            // user and time are the same arguments passed in `events.publish(user, time)`
            this.myid = id;
            alert(3);

        }));

         this.departments = this.catPr.getDepartmentsByCityId(this.cities[0].id);

         console.log(this.departments );

        this.myForm.valueChanges.subscribe(value => {
            this.cityCoordinates = this.catPr.getCityCoordinates(value.mapStyle);
            this.departments = this.catPr.getDepartmentsByCityId(value.mapStyle);
            this.loadMap();
        });




    }
    myClick(){
        // this.event.publish('marker-click', 1)

    }

    getCities(i){
        return  this.cities.splice( i*4 ,4);
    }

    loadMap(){

        let latLng = new google.maps.LatLng( this.cityCoordinates.lat,this.cityCoordinates.ln);

        let mapOptions = {
            center: latLng,
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

       this.departments.list.forEach(item => {
       this.addMarker(new google.maps.LatLng(item.coordinates.lat,item.coordinates.ln),'assets/imgs/ic_location.png', item);
   })

    }




    addMarker(position, icon, item){

        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: position,
            icon:icon,
            id:1
        });

     console.log(marker);

        let content =  "<div class='my-pop-up'><h4><span class='my-icon'><img src='assets/imgs/loc.png'></span><span>"+item.dpNumber+"</span></h4>" +
                         "<p>"+item.address+"</p>"+
                          "<p>"+item.hint+"</p>" +
                          "<p><span>Графік роботи: </span><span>"+item.shedule+"</span></p>" +
            "<button id='call'></button></div>";

        this.addInfoWindow(marker, content,item);
    }



    addInfoWindow(marker, content,item){
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });
        this.windowList.push(infoWindow);
        google.maps.event.addListener(marker, 'click', () => {
            this.closeAllWIndows();


            infoWindow.open(this.map, marker);
        });
    }

    closeAllWIndows(){
        this.windowList.forEach(window =>{
            window.close();
        })

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

