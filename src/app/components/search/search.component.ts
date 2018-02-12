import { Component, OnInit, Input, Output } from '@angular/core';
import { BookSearchService } from '../../book-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    private searchTerm;
    constructor(private bookSerachService: BookSearchService) {
      this.searchTerm = 'aaaa';
    }

    ngOnInit() {
    }

    doSearch() {
      this.bookSerachService.searchBook(this.searchTerm);
      console.log(this.searchTerm);
    }

}
