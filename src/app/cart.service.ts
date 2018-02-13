import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash';

@Injectable()
export class CartService {

    books;

    cartChanged = new Subject<any>();
    cartChanged$ = this.cartChanged.asObservable();

    constructor() {
        this.books = JSON.parse(localStorage.getItem('cartItems')) || [];
    }

    addToCart(book) {
        if (!this.getBook(book.id)) {
            this.books.push(book);
            if (window.localStorage !== undefined) {
              localStorage.setItem('cartItems', JSON.stringify(this.books));
            }
            this.cartChanged.next(this.books);
        }
      }

    getCart() {
        return this.books;
    }

    getBook(id) {
        return _.find(this.books, {id});
    }

    getCartLength() {
        return this.books.length;
    }

}
