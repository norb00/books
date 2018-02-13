import { Component, OnInit, Input, Output } from '@angular/core';
import { BookSearchService } from '../../book-search.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    private searchTerm;
    constructor(private bookSerachService: BookSearchService,
                private router: Router) {
      this.searchTerm = 'aaaa';
    }

    ngOnInit() {
    }

    doSearch() {
      this.bookSerachService.searchBook(this.searchTerm);
      this.router.navigate(['/index']);
      console.log(this.searchTerm);
    }

}
