import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class BookSearchService {

    // Observable string sources
    bookListChanged = new Subject<any>();

    // Observable string streams
    bookListChanged$ = this.bookListChanged.asObservable();

    private books;

    constructor() {}

    selectBookList(any) {
      this.bookListChanged.next(any);
    }

    getBooks(searchTerm?: string) {
        return this.books;
    }

    getBook(id: string) {
        return this.books[1];
    }

    searchBook(searchTerm?: string) {
        this.books = [{
          id: 1,
          title: 'aaa'
        }, {
          id: 2,
          title: 'bbb'
        }, {
          id: 3,
          title: 'ccc'
        }, {
          id: 4,
          title: 'ddd'
        }
      ];
      this.bookListChanged.next(this.books);
    }
}
