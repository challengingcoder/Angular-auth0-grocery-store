import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { ProductComponent } from './product.component';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		ProductComponent,
	],
	exports: [
		ProductComponent,
	]
})
export class ProductModule { }
