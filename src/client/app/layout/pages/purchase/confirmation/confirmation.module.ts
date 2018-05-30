import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { ConfirmationComponent } from './confirmation.component';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		ConfirmationComponent,
	],
	exports: [
		ConfirmationComponent,
	]
})
export class ConfirmationModule { }
