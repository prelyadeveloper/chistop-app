// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CategoriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriesProvider {

  services;

  constructor() {
    console.log('Hello CategoriesProvider Provider');

      this.services = [{
          id:1,
          name :'Чистка текстилю',
          list:[{id:1,name:'Головний убір, шарф, рукавиці, хустина',price:'22'},
              {id:2,name:' Жилет, безрукавка',price:'43'},
              {id:3,name:' Пальто, півпальто, плащ, пончо',price:'65'}],
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
  }


  getServices(){
    return this.services;
  }

}
