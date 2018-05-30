import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { HeaderComponent } from './header.component';

// CHILDREN
import { NavModule } from './nav/nav.module'

// BOOTSTRAP
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { Modules } from '../../../core';
import { ShoppingCartComponent } from './cart/cart.component';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		NavModule,
		BsDropdownModule.forRoot(),
		Modules
	],
	declarations: [
		HeaderComponent,
		ShoppingCartComponent

	],
	exports: [
		HeaderComponent,
		ShoppingCartComponent,
		NavModule
	]
})
export class HeaderModule { }
