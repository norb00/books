import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  numberOfBooksInCart = 0;
  constructor(private cartService: CartService) {
    cartService.cartChanged.subscribe(
      books => {
            this.numberOfBooksInCart = this.cartService.getCartLength();
        });

    }
  
  ngOnInit() {
    this.numberOfBooksInCart = this.cartService.getCartLength();
  }

}
