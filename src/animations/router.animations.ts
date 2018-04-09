import {trigger, state, animate, style, transition,stagger} from '@angular/animations';
// import {delay} from "rxjs/operators";

export function routerTransition() {
    return slideToLeft();
}

export function rotateTrans(){

    return rotateItem();
}
export function scaleAnimation() {
    return scaleUp();
}


function slideToLeft() {
    return trigger('routerTransition', [

        state(':leave', style({position: 'absolute', width: '100%', transform: 'translateX(-100%)'}) ),
        state(':enter', style({position: 'absolute', width: '100%'}) ),
        transition(':enter', [  // before 2.1: transition('void => *', [
            style({transform: 'translateX(-100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(0%)'})) ,

        ]),
        transition(':leave', [  // before 2.1: transition('void => *', [
            style({transform: 'translateX(200%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(0%)'})) ,

        ]),
        // transition(':enter', [  // before 2.1: transition('* => void', [
        //     style({transform: 'translateX(0%)'}),
        //     animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
        // ])
    ]);
}
function scaleUp() {
    return trigger('ScaleAnim', [

        transition(':enter', [  // before 2.1: transition('void => *', [
            style({transform: 'scale(0)'}),
            animate('0.5s ease-in-out', style({transform: 'scale(1)'})) ,
        ]),
        transition(':leave', [  // before 2.1: transition('* => void', [
            style({transform: 'scale(1)'}),
            animate('0.5s ease-in-out', style({transform: 'scale(0)'}))
        ])
    ]);
}

function rotateItem() {
    return trigger('rotateAnim', [
        transition(':enter', [  // before 2.1: transition('void => *', [
            style({transform: 'rotate(0)'}),
            animate('2s ease-in-out', style({transform: 'rotate(360deg)'})) ,
        ])
    ]);
}

//
// function slideToRight() {
//     return trigger('routerTransition', [
//         state('void', style({position: 'fixed', width: '100%'}) ),
//         state('*', style({position: 'fixed', width: '100%'}) ),
//         transition(':enter', [  // before 2.1: transition('void => *', [
//             style({transform: 'translateX(100%)'}),
//             animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
//         ]),
//         transition(':leave', [  // before 2.1: transition('* => void', [
//             style({transform: 'translateX(0%)'}),
//             animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
//         ])
//     ]);
// }