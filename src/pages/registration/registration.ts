import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";
import {AbstractControl} from "@angular/forms";
import {ValidatorFn} from "@angular/forms";

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

    registr: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb:FormBuilder) {

      this.registr = this.fb.group({

          firstName: ['', [Validators.required]],
          lastName: ['', [Validators.required ]],
          email: ['', [Validators.required, Validators.email]],
          mobile: ['', Validators.required],
          passwords: this.fb.group({
              password: ['', Validators.required],
              confirmPass: ['', Validators.required]
          },{validator: [this.passwordConfirming, Validators.required]})
      })
  }

  errorStyle(name){
    return {'border-color': this.ifTouchedAndHasErrors(name) ? '#D05743' : ''};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
    submit() {
        Object.keys(this.registr.controls).forEach(field => { // {1}
            const control = this.registr.controls[field];            // {2}
            control.markAsTouched({ onlySelf: true });       // {3}
        });
        (this.registr.controls['passwords']as  FormGroup).controls['confirmPass'].markAsTouched();
        (this.registr.controls['passwords']as  FormGroup).controls['password'].markAsTouched();
    }
    ifValid(name){
        return this.registr.controls[name].getError('required');
    }
    ifTouchedAndHasErrors(name) {
        return this.registr.controls[name].errors && this.registr.controls[name].touched;
    }
    ifTouchedInGropup(groupName,name) {
        return (this.registr.controls[groupName]as  FormGroup).controls[name].errors
            && (this.registr.controls[groupName]as  FormGroup).controls[name].touched;
    }

    ifPasswordGroup(){

    }
    errorStyleGroupCntr(groupName,Name){
        return {'border-color': this. ifTouchedInGropup(groupName,Name) ? '#D05743' : ''};
    }

     passwordConfirming(c: AbstractControl): { invalid: boolean } {
        if (c.get('password').value !== c.get('confirmPass').value ) {
            return {invalid: true};
        } else{
            return null;
        }
    }


}





export function onlyText(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {

        const forbidden =  /^[a-zA-Z\s]*$/.test(control.value);
        return forbidden ? {'onlyText': {value: control.value}} : null;
    };
}
export function onlyMobile(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {

        const forbidden =  /^[a-zA-Z\s]*$/.test(control.value);
        return forbidden ? {'onlyText': {value: control.value}} : null;
    };
}


