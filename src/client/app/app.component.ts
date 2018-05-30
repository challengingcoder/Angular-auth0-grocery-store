import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from '../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './core';
import { Observable } from 'rxjs/Observable';
import { CartService } from './core/services/cart.service';
import { Product } from './core/interfaces/product.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {

	public shoppingCartItems: Observable<Product[]>;

	constructor(
		public router: Router, 
		public AS: AuthService, 
		private cartService: CartService
	) {

		this.shoppingCartItems = this.cartService.getItems();

		this.shoppingCartItems.subscribe(_ => _);
	}

	ngOnit() { 
		if(this.AS.isAuthenticated()){

		}
	 }

	 isRegister(value: string): boolean {
		return /^\/sign-up(\/|$)/.test(value);
	}

}
