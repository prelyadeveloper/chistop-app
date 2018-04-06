import {Component, ElementRef, HostListener} from '@angular/core';
// import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, FormArray} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public fg: FormGroup;
public services;

  constructor(private fb: FormBuilder){


   this.services = [{
        id:1,
        name :'Чистка текстилю',
        list:[{id:1,name:'Головний убір, шарф, рукавиці, хустина',price:'22'},
            {id:2,name:' Жилет, безрукавка',price:'22'},
            {id:1,name:' Пальто, півпальто, плащ, пончо',price:'22'}],
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
    //
    // this.fg = this.fb.group({
    //     chosenServices: new FormArray({
    //         new FormGroup({
    //
    //         })
    //     })
    // })
  }


}
