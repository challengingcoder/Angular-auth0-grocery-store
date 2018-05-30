import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { PricingComponent } from './pricing.component';
import { HeaderModule } from '../../shared';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		HeaderModule
	],
	declarations: [
		PricingComponent

	],
	exports: [
		PricingComponent
	]
})
export class PricingModule { }
