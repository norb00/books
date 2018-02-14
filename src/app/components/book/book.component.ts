import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';
import { BookSearchService } from '../../book-search.service';
import { Book, BookList } from '../../data-types'

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    public id: string;
    public book: Book;
    constructor(private route: ActivatedRoute,
                private cartService: CartService,
                private bookSearchService: BookSearchService) {

        this.route.params.subscribe( params => {
            this.id = params['id'];
            this.bookSearchService.getBook(this.id);
        });

        this.bookSearchService.bookChanged.subscribe(book => {
            this.book = book;
        });
    }

    ngOnInit() {
    }

    addToCart(book: Book) {
        this.cartService.addToCart(book);
    }
}
