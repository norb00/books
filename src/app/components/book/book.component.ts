import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';
import { BookSearchService } from '../../book-search.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    public id: string;
    public book: {};
    constructor(private route: ActivatedRoute,
                private cartService: CartService,
                private bookSearchService: BookSearchService) {

        this.route.params.subscribe( params => {
            console.log(params);
            this.id = params['id'];
            this.bookSearchService.getBook(this.id);
        });

        this.bookSearchService.bookChanged.subscribe(book => {
            this.book = book;
        });
    }

    ngOnInit() {
        this.book = {
            volumeInfo: {
                authors: [],
                imageLinks: {
                    thumbnail: ''
                }
            }
        };
    }

    addToCart(id: string) {
      this.cartService.addToCart(id)
      console.log(id);
    }
}
