import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { NavComponent } from './nav.component';
import { FormsModule } from '@angular/forms';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		NavComponent

	],
	exports: [
		NavComponent
	]
})
export class NavModule { }
