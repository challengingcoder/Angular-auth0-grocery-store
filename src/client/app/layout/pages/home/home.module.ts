import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// RELATED
import { HomeComponent } from './home.component';
import { HeaderModule } from '../../shared';

// MODULES
import { Modules } from '../../../core'

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		HeaderModule,
		FormsModule,
		Modules
	],
	declarations: [
		HomeComponent,

	],
	exports: [
		HomeComponent,
	]
})
export class HomeModule { }
