import { Component, OnInit } from '@angular/core';
import { BookSearchService } from '../../book-search.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    books;
    constructor(private bookSerachService: BookSearchService) {
        bookSerachService.bookListChanged.subscribe(
            books => {
                console.log('SERVICE start', books);
                this.books = books;
            });
    }

    ngOnInit() {
//        this.books = this.bookSerachService.getBooks();
    }

}
