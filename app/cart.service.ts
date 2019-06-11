import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    items = [];

    constructor(
      private http: HttpClient,
      private router: Router,
    ) {}

    addToCart(product) {
      this.items.push(product);
      this.router.navigate(['/list']);
      window.alert('Сагсанд нэмэгдлээ!');
    }
  
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }
    getShippingPrices() {
      return this.http.get('/assets/shipping.json');
    }
}