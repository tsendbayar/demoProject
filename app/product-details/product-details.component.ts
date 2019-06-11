import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';


@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
  })

export class ProductDetailsComponent implements OnInit {
  user;
    addToCart(product) {
        this.cartService.addToCart(product);
      }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
          this.product = products[+params.get('productId')];
        });
      }
    product;
  
    constructor(
      private route: ActivatedRoute,
      private cartService: CartService,
      private loginService: LoginService,
    private router: Router,
    ) { 
      this.user= this.loginService.getUser();
    if(!this.user){
      window.alert('Ямар нэг юм буруу боллоо!');
      this.router.navigate(['/']);
    }
    }
  
  }

