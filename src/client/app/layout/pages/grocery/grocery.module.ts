import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { GroceryComponent } from './grocery.component';

import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { HeaderModule } from '../../shared';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		GridModule,
		FormsModule,
		ReactiveFormsModule,
		DropDownsModule,
		HeaderModule,

		// CHILDREN
		CategoryModule,
		ProductModule
	],
	declarations: [
		GroceryComponent
	],
	exports: [
		GroceryComponent,

		// CHILDREN
		CategoryModule,
		ProductModule
	]
})
export class GroceryModule { }
