import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';   
import { users } from '../users';
import { LoginService } from '../login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

  export class LoginComponent{
    users = users;
      loginForm;
    constructor(
        private formBuilder: FormBuilder,
        private LoginService: LoginService,
    ) { 
        this.loginForm = this.formBuilder.group({
            name: '',
            pass: ''
          });
    }
    onSubmit(customerData) {
      for(let user of users){
        if(user.name==customerData.name){
          if(user.pass==customerData.pass){
            this.LoginService.session(customerData.name);
          }
          else{
            window.alert('Хэрэглэгчийн нэр эсвэл нууц үг буруу байна!');
          }
        }
        else{
          window.alert('Хэрэглэгчийн нэр эсвэл нууц үг буруу байна!');
        }
      }
      } 
  }