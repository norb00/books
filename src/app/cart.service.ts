import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash';
import { Book, BookList } from './data-types'

@Injectable()
export class CartService {

    books: BookList;

    cartChanged = new Subject<BookList>();
    cartChanged$ = this.cartChanged.asObservable();

    constructor() {
        this.books = JSON.parse(localStorage.getItem('cartItems')) || [];
    }

    addToCart(book: Book) {
        if (!this.getBook(book.id)) {
            this.books.push(book);
            if (window.localStorage !== undefined) {
                localStorage.setItem('cartItems', JSON.stringify(this.books));
            }
            this.cartChanged.next(this.books);
        }
    }

    removeFromCart(book: Book){
        _.remove(this.books, {id: book.id});
        if (window.localStorage !== undefined) {
            localStorage.setItem('cartItems', JSON.stringify(this.books));
        }
        this.cartChanged.next(this.books);
  }

    getCart() {
        return this.books;
    }

    getBook(id: string) {
        return _.find(this.books, {id});
    }

    getCartLength() {
        return this.books.length;
    }

}
