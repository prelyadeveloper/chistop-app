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
            cityId:1,
            city:'Львів',
            coordinates:{
                lat:49.839683,
                ln:24.029717
            },
            list:[
                {
                    depId:7,
                    dpNumber:'Львів. Відділення №5',
                    address:'вул.Героїв УПА, 77*',
                    hint:'Фабрика Хімчистки ЧИСТО',
                    shedule:'пн.-сб. 8.30-20.30, нд. 8.30-18.00',
                    tel:'(032) 298 94 74',
                    coordinates: {
                        lat:49.828197,
                        ln:23.990703
                    }
                },
                {
                    depId:6,
                    dpNumber:'Львів. Відділення №6',
                    address:'вул. В.Великого, 58 ТЦ Ашан',
                    hint:'Пункт прийому Хімчистки ЧИСТО',
                    shedule:'пн.-нд. 9.00-21.00',
                    tel:'0 800 60 15 15',
                    coordinates: {
                        lat:49.812347,
                        ln:23.986461
                    }
                },
                {
                    depId:6,
                    dpNumber:'Львів. Відділення №7',
                    address:'вул. Б. Хмельницького,214 ТЦ ВАМ',
                    hint:'Фабрика хімчистки ЧИСТО',
                    shedule:'пн.-сб. 10.00-21.00, нд. 10.00-18.00',
                    tel:'(032) 295 89 65',
                    coordinates: {
                        lat:49.812347,
                        ln:23.986461
                    }
                }
            ]
        },
        {
            cityId:2,
            city:'Стрий',
            coordinates:{
                lat:49.265608,
                ln:23.843134
            },
            list:[
                {
                    depId:3,
                    dpNumber:'Львів. Відділення №10',
                    address:'вул. Шевченка, 105Б',
                    hint:'Пункт Прийому Хімчистки ЧИСТО',
                    shedule:'пн.-пт. 10.00-19.00 обід. 14.00- 15.00',
                    tel:'(032) 295 20',
                    coordinates: {
                        lat:49.259568,
                        ln:23.853110
                    }
                }
                ]
        },
        {
            cityId:3,
            city:'Червоноград',
            coordinates:{
                lat:50.387177,
                ln:24.219945
            },
            list:[
                {   depId:2,
                    dpNumber:'Львів. Відділення №99',
                    address:'вул. Сокальська,38 ТЦ Рукавичка',
                    hint:'ТПункт прийому Хімчистки ЧИСТО',
                    shedule:'пн.-сб. 09.00-19.00',
                    tel:'(03249) 4 60 06',
                    coordinates: {
                        lat:49.828197,
                        ln:23.990703
                    }
                }]
        },
        {
            cityId:4,
            city:'Дрогобич',
            coordinates:{
                lat:49.358012,
                ln:23.512319
            },
            list:[
                {
                    depId:1,
                    dpNumber:'Львів. Відділення №5',
                    address:'вул.П.Орлика, 18 ТЦ МІСТО',
                    hint:'ТЦ “Пункт прийому Хімчистки ЧИСТО',
                    shedule:'пн.-сб. 9.00-21.00, нд. 10.00-19.00 ',
                    tel:'(0324) 45 00 71',
                    coordinates: {
                        lat:49.828197,
                        ln:23.990703
                    }

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

  getCityCoordinates(id) {
        return this.departments.find(item => {
          return item.cityId === id;
      }).coordinates;
  }
  getDepartmentByCityAndDepId(cityId, depId){
      let deps = this.getDepartmentsByCityId(cityId).list;

      return deps.find(item => {
          return item.depId == depId;
      })
  }

  getDepartmentsByCityId(id){
      return this.departments.find(item => {
          return item.cityId === id;
      });
  }


  getDepartmentsCities(){
      let departments = [];

      this.departments.forEach(item => {
          departments.push({id:item.cityId, city: item.city});
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
