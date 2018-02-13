import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Book } from './data-types'

@Injectable()
export class BookSearchService {

    private booksConfig = {
        searchUrl: 'https://www.googleapis.com/books/v1/volumes?q=',
        bookUrl: 'https://www.googleapis.com/books/v1/volumes/'
    };
    private books: Array<Book>;
    private book: Book;
    private GURL: string;

    // Observable string sources
    bookListChanged = new Subject<Array<Book>>();
    bookChanged = new Subject<Book>();

    // Observable string streams
    bookListChanged$ = this.bookListChanged.asObservable();
    bookChanged$ = this.bookChanged.asObservable();

    constructor(private http: HttpClient) {}

    getBook(id: string) {
        this.GURL = this.booksConfig.bookUrl + id;
        this.http.get(this.GURL).subscribe((data:any) => {
            this.book = data;
            this.bookChanged.next(this.book);
          });
    }

    searchBook(searchTerm?: string) {
        this.GURL = this.booksConfig.searchUrl + searchTerm;
        this.http.get(this.GURL).subscribe((data: any) => {
            this.books = data.items;
            this.bookListChanged.next(this.books);
          });
    }
}
