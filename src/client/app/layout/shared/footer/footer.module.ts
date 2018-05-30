import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// RELATED
import { FooterComponent } from './footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// CHILDREN
import { NavModule } from './nav/nav.module'

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		NavModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		FooterComponent

	],
	exports: [
		FooterComponent,
		NavModule
	]
})
export class FooterModule { }
