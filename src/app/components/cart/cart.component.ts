import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    books: any;
    constructor(private cartService: CartService) { }

  ngOnInit() {
      this.books = this.cartService.getCart();
  }

}
