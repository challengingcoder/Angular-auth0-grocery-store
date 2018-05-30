import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// PAGES
import {
	HomeModule,
	CouponModule,
	PurchaseModule,
	MobileAppModule,
	GroceryModule,
	SearchModule,
	NotFoundModule,
	UserModule,
	ReceipeModule,
	PricingModule,
	AuthModule
} from './layout/pages/index'

// SHARED
import {
	HeaderModule,
	FooterModule
} from './layout/shared/index'

// PROVIDERS
import {
	AuthGuardService,
	AuthService,
	API,
  DBService
} from './core/index';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartService } from './core/services/cart.service';
import { ProductsService } from './core/services/product.service';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		HttpModule,
		AppRoutingModule,

		// PAGES
		HomeModule,
		CouponModule,
		PurchaseModule,
		MobileAppModule,
		GroceryModule,
		SearchModule,
		NotFoundModule,
		UserModule,
		ReceipeModule,
		PricingModule,
		AuthModule,

		// SHARED
		HeaderModule,
		FooterModule
	],
	providers: [
		AuthGuardService,
		AuthService,
		API,
		DBService,
		CartService,
		ProductsService
	],
	bootstrap: [AppComponent]
})

export class AppModule {}
