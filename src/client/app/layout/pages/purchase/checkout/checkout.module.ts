import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { CheckoutComponent } from './checkout.component';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		CheckoutComponent,
	],
	exports: [
		CheckoutComponent,
	]
})
export class CheckoutModule { }
