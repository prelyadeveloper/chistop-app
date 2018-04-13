import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Events} from "ionic-angular";
import {CategoriesProvider} from "../../providers/categories/categories";
import {ViewChild} from "@angular/core";
import {trigger, transition, style, animate, useAnimation} from "@angular/animations";
import {HostBinding} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FormBuilder} from "@angular/forms";


/**
 * Generated class for the PricesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prices',
  templateUrl: 'prices.html'
})
export class PricesPage {
    @ViewChild('inputValue') input;
    services;
    sortedServices;
    sortedServiceList;
    subCat;
    savedServices = [];
    overallPrice = 0;
    view: string;
    bindingVar = '';
    myForm : FormGroup;
    shift = '';
    cities;
    cityId = 1;



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private events: Events,
              private catPr: CategoriesProvider,
              private fb: FormBuilder) {
    this.view = 'cat';

      this.services = this.catPr.getServicesByCityId(this.cityId);
      this.sortedServices = this.services;

      this.cities = this.catPr.getDepartmentsCities();



      this.myForm = this.fb.group({
          mapStyle:[this.cities[0].id]
      });

      this.myForm.valueChanges.subscribe(value =>{
          this.services = this.catPr.getServicesByCityId(value.mapStyle);
          this.servicesSort(this.input.nativeElement.value);
          this.cityId = value.mapStyle;
      })
  }

    toggle(){

          this.shift =  this.shift ==='leave' ? 'enter' : 'leave';

    }

    search(){
      if (this.view === 'cat') {
          this.servicesSort(this.input.nativeElement.value);
      } else {
        this.serviceListSort(this.input.nativeElement.value);
      }
    }

    showSubCat(id : number){
        this.input.nativeElement.value = '';
        this.subCat = this.findSubCat(id,this.cityId);
        this.sortedServiceList = this.subCat.list;
        this.view = 'subcat';
    }

    findSubCat(id : number, cityId: number) {
    return this.services.find(item => {
      return item.id === id && item.cityId === cityId;
    })
    }

    serviceListSort(name: string) {
        this.sortedServiceList =  this.sort(this.subCat.list, name);
    }
    servicesSort(input: string) {
        this.sortedServices =  this.sort(this.services, input);
    }

    showCat(){
        this.input.nativeElement.value = '';
        this.servicesSort('');
        this.view = 'cat';
    }

    sort(arr , name : string) {
    let someArr = [];
        arr.forEach(item => {
            if(item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1) {
                someArr.push(item);
            }
        })
        return someArr;
    }

    ChangeValue(amount, item){

      let service = item;

      service.amount = amount;

       let index =  this.savedServices.findIndex(value => { return value.id === item.id});

        if (index === -1) {
          this.savedServices.push(item);
        } else if(index !== -1) {
            if(amount === 0) {
                this.savedServices.splice(index,1);
            } else {
                this.savedServices[index].amount = amount;
            }
        }
        this.countAmount();
    }

    countAmount(){
        this.overallPrice = 0;

        if(this.savedServices.length > 0) {
            this.savedServices.forEach(item => {
                this.overallPrice+= item.amount * item.price;
            })
        }
    }

    goToOrder() {
        this.showCat();
        let serv = this.savedServices;
        this.events.publish('savedSrv',1,serv)
        this.savedServices = [];
    }

    ionViewDidLeave(){
        this.showCat();
        this.savedServices = [];
        this.overallPrice = 0;

    }
}
