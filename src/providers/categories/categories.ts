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
  ordered;
  departments;

  constructor() {
    console.log('Hello CategoriesProvider Provider');


    this.departments = [
        {
            id:1,
            city:'Львів',
            list:[
                {
                    dpNumber:'Львів. Відділення №5',
                    address:'Львів, вул. Виговського, 100***',
                    hint:'ТЦ “ВАМ” вхід з вулиці Виговського та головного входу ТЦ',
                    shedule:'пн. - суб. 9.00-21.00',
                    tel:'(032) 295 20'
                },
                {
                    dpNumber:'Львів. Відділення №5',
                    address:'Львів, вул. Виговського, 100***',
                    hint:'ТЦ “ВАМ” вхід з вулиці Виговського та головного входу ТЦ',
                    shedule:'пн. - суб. 9.00-21.00',
                    tel:'(032) 295 20'
                }
            ]
        },
        {
            id:2,
            city:'Стрий',
            list:[
                {
                    dpNumber:'Львів. Відділення №5',
                    address:'Львів, вул. Виговського, 100***',
                    hint:'ТЦ “ВАМ” вхід з вулиці Виговського та головного входу ТЦ',
                    shedule:'пн. - суб. 9.00-21.00',
                    tel:'(032) 295 20'
                }
                ]
        },
        {
            id:3,
            city:'Червоноград',
            list:[
                {
                    dpNumber:'Львів. Відділення №5',
                    address:'Львів, вул. Виговського, 100***22',
                    hint:'ТЦ “ВАМ” вхід з вулиці Виговського та головного входу ТЦ',
                    shedule:'пн. - суб. 9.00-21.00',
                    tel:'(032) 295 20'
                }]
        },
        {
            id:4,
            city:'Дрогобич',
            list:[
                {
                    dpNumber:'Львів. Відділення №5',
                    address:'Львів, вул. Виговського, 100***11',
                    hint:'ТЦ “ВАМ” вхід з вулиці Виговського та головного входу ТЦ',
                    shedule:'пн. - суб. 9.00-21.00',
                    tel:'(032) 295 20'
                }]
        }

    ]

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

      this.ordered = [
          {
              id:264546,
              type:'Звичайна чистка',
              name: 'Головний убір, шарф, рукавиці, хустина',
              from:'20 бер',
              to:'30 бер',
              state:false,
              price:'79',
              department:{
                  dpNumber:'Львів. Відділення №5',
                  address:'Львів, вул. Виговського, 100***',
                  hint:'ТЦ “ВАМ” вхід з вулиці Виговського та головного входу ТЦ',
                  shedule:'пн. - суб. 9.00-21.00',
                  tel:'(032) 295 20'
              }
          },
          {
              id:267688,
              type:'Звичайна чистка',
              name: 'Куртка утеплена, пальто (більше 70 см.)',
              from:'1 бер',
              to:'5 бер',
              state:true,
              price:'87',
              department:{
                  dpNumber:'Львів. Відділення №5',
                  address:'Львів, вул. Виговського, 100***',
                  hint:'ТЦ “ВАМ” вхід з вулиці Виговського та головного входу ТЦ',
                  shedule:'пн. - суб. 9.00-21.00',
                  tel:'(032) 295 20'
              }
          }
      ];
  }

  getDepartmentsById(id){
      return this.departments.find(item => {
          return item.id === id;
      }).list;
  }


  getDepartmentsCities(){

      let departments = [];

      this.departments.forEach(item => {
          departments.push({id:item.id, city: item.city});
      })

      return departments;
  }

  getServices(){
    return this.services.slice();
  }

  getOrderedList(){
      return this.ordered.slice();
  }
  getOrderedItem(id) {
      return this.ordered.find(item => {
          return item.id === id;
      })
  }

}
