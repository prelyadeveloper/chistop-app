import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  services;
  constructor(public navCtrl: NavController, public navParams: NavParams) {


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
              name :'Aквачистка',
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }



}
