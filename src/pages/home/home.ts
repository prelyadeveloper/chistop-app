import {Component} from '@angular/core';
import { FormGroup} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public fg: FormGroup;
public services;

  constructor(){


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


}
