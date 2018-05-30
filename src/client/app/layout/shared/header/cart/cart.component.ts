import {Component, OnInit} from '@angular/core';
import {Product, CartService} from '../../../../core/index';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'shopping-cart',
  templateUrl: './cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  public shoppingCartItems$: Observable<Product[]> = of([]);
  public shoppingCartItems: Product[] = [];

  constructor(private cartService: CartService) {
    this.shoppingCartItems$ = this.cartService.getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

}