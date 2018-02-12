import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { CartComponent } from './components/cart/cart.component';

export const AppRoutes: Routes = [
    { path: 'index', component: BookListComponent },
    { path: 'cart', component: CartComponent },
    { path: 'book/:id', component: BookComponent },
    { path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    { path: '**',
        redirectTo: 'index',
        pathMatch: 'full'
    }
  ];


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
