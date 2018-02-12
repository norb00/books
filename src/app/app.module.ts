import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { CartComponent } from './components/cart/cart.component';

import { BookSearchService } from './book-search.service';
import { ROUTING } from './app.routing';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    CartComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING
  ],
  providers: [BookSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
