import { Component, OnInit } from '@angular/core';
import { BookSearchService } from '../../book-search.service';
import { Book } from '../../data-types'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    books: Array<Book>;
    constructor(private bookSerachService: BookSearchService) {
        bookSerachService.bookListChanged.subscribe(
            books => {
                this.books = books;
            });
    }

    ngOnInit() {
    }

}
