import { Component, OnInit } from '@angular/core';

// SEO
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Product, CartService } from '../../../../core/index';
import { of } from 'rxjs/observable/of';

// COMPONENT
@Component({
	moduleId: module.id,
	selector: 'cart',
	templateUrl: 'cart.component.html',
})

// CLASS
export class CartComponent implements OnInit {
	
	public shoppingCartItems$: Observable<Product[]> = of([]);
  public shoppingCartItems: Product[] = [];

	constructor(meta: Meta, title: Title, private cartService: CartService) {
		
		this.shoppingCartItems$ = this.cartService.getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);

		title.setTitle('Find where your groceries are in the market - Grocery Finder');

	}

  ngOnInit() {
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(item: Product) {
    this.cartService.removeFromCart(item)
  }

}
