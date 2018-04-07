import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PricesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prices',
  templateUrl: 'prices.html',
})
export class PricesPage {
    services;
    sortedServices;
    sortedServiceList;
    subCat;

    view: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.view = 'cat';
      this.services = [{
          id:1,
          name :'Чистка текстилю',
          list:[{id:1,name:'Головний убір, шарф, рукавиці, хустина',price:'22'},
              {id:2,name:' Жилет, безрукавка',price:'43'},
              {id:1,name:' Пальто, півпальто, плащ, пончо',price:'65'}],
          icon:'icon-water'
      },
          {
              id:2,
              name :'Фарбування текстилю',
              list:[],
              icon:'icon-paint'
          },
          {
              id:3,
              name :'Аквачистка',
              list:[],
              icon:'icon-shirt'
          },

          {
              id:3,
              name :'Еко чистка',
              list:[],
              icon:'icon-eco'
          },
          {
              id:3,
              name :'Прасування',
              list:[],
              icon:'icon-iron'
          }
      ]

      this.sortedServices = this.services;
  }

    search(input: HTMLInputElement){
      if (this.view === 'cat') {
          this.servicesSort(input.value);
      } else {
        this.serviceListSort(input.value);
      }
    }

    showSubCat(id : number, input: HTMLInputElement){
        input.value = '';
        this.subCat = this.findSubCat(id);
        this.sortedServiceList = this.subCat.list;
        this.view = 'subcat';
    }

    findSubCat(id : number) {
    return this.services.find(item => {
      return item.id === id;
    })
    }

    serviceListSort(name: string) {
        this.sortedServiceList =  this.sort(this.subCat.list, name);
    }
    servicesSort(input: string) {
        this.sortedServices =  this.sort(this.services, input);
    }

    showCat(input: HTMLInputElement){
        input.value = '';
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad PricesPage');
  }

}
