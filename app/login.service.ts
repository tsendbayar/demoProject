import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';
import { users } from './users';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
    hooman;
    session(name){
     
      this.hooman = name;
      this.router.navigate(['/list']);
        
    }
    getUser() {
      return this.hooman;
    }
    constructor(private router: Router){}
}