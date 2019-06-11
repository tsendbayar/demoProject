import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';   
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  user;
    items;
    checkoutForm;

    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private router: Router,
      ) {
        this.items = this.cartService.getItems();
        this.checkoutForm = this.formBuilder.group({
            address: ''
          });
          this.user= this.loginService.getUser();
          if(!this.user){
            window.alert('Ямар нэг юм буруу боллоо!');
            this.router.navigate(['/']);
          }
      }
      onSubmit(customerData) {
        // Process checkout data here
        console.warn('Таны сагсанд нэмэгдлээ!', customerData);
     
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
      } 
 
}