import { Component } from '@angular/core';

/**
 * Generated class for the ActionsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'actions',
  templateUrl: 'actions.html'
})
export class ActionsComponent {

  text: string;

  actionsList;

  constructor() {
    console.log('Hello ActionsComponent Component');
    this.text = 'Hello World';


    this.actionsList = [{
        title:'Професійна чистка килимів м. Луцьк',
        date:'2018-03-29 23:25:35',
        description: 'Акція!!! Чистка Килима 29грн/м2, Плед/Покривало будь-якого Розміру 129 грн до 30.04',
        img: 'https://chysto.in.ua/stuff/news/10/29693349_1765954303427221_567754106_o.jpg'
    },
        {
            title:'Професійна чистка килимів м. Луцьк',
            date:'2018-03-29 23:25:35',
            description: 'Акція!!! Чистка Килима 29грн/м2, Плед/Покривало будь-якого Розміру 129 грн до 30.04',
            img: 'https://chysto.in.ua/stuff/news/10/29693349_1765954303427221_567754106_o.jpg'
        }
    ]
  }

}
