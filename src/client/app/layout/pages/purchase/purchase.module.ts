import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { CheckoutModule } from './checkout/checkout.module';
import { CartModule } from './cart/cart.module';
import { ConfirmationModule } from './confirmation/confirmation.module';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
    RouterModule,
    
    CheckoutModule,
    CartModule,
    ConfirmationModule
	],
	exports: [
    CheckoutModule,
    CartModule,
    ConfirmationModule
	]
})
export class PurchaseModule { }
