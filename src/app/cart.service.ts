import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

    books;
    constructor() {
        this.books = [];
    }

    addToCart(id) {
        this.books.push(id);
    }

    getCart() {
        return this.books;
    }

}
