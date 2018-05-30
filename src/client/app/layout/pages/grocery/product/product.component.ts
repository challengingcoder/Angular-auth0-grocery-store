import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Product, ProductsService, CartService } from '../../../../core';

@Component({
  selector: 'product',
  templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit {
  public product: Product = {};

	constructor(
		private route: ActivatedRoute, 
		private router: Router, 
		private productsService: ProductsService, 
		private cartService: CartService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
			const id = +params['id'];
			
      this.productsService.getProduct(id).subscribe(x => this.product = x)
    });
  }

  public addToCart(product: Product) {
    this.cartService.addToCart(product);
   // this.router.navigateByUrl('/');
  }
}