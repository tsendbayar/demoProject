import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  user;
  visibility;
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { 
    this.user= this.loginService.getUser();
    if(!this.user){
      this.visibility="visibility:hidden";
    }else{
      this.visibility="visibility:visible";
    }
  }

  ngOnInit() {
  }

}