import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
        email:['',[Validators.required]],
        password:['',Validators.required]
    })
  }

  submit() {
      Object.keys(this.loginForm.controls).forEach(field => { // {1}
          const control = this.loginForm.controls[field];            // {2}
          control.markAsTouched({ onlySelf: true });       // {3}
      });
  }
  ifValid(name){
    return this.loginForm.controls[name].getError('required');
  }
  ifTouchedAndHasErrors(name) {
      return this.loginForm.controls[name].errors && this.loginForm.controls[name].touched;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
