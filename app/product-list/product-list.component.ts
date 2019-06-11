import { Component } from '@angular/core';

import { products } from '../products';
import { LoginService } from '../login.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  user;
  products = products;
  constructor(
    private loginService: LoginService,
    private router: Router,
  ){
    this.user= this.loginService.getUser();
    if(!this.user){
      window.alert('Ямар нэг юм буруу боллоо!');
      this.router.navigate(['/']);
    }
  }
  share() {
    window.alert('The product has been shared!');
  }
}