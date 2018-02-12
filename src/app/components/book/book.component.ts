import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    public id: string;
    constructor(private route: ActivatedRoute,
                private cartService: CartService) {
        this.route.params.subscribe( params => {
            this.id = params['id'];
            console.log(params['id']);
        });
    }

    ngOnInit() {
    }

    addToCart(id: string) {
      this.cartService.addToCart(id)
      console.log(id);
    }
}
