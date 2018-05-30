import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { CreditCardModule } from './credit card/credit-card.module';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		DropDownsModule,
		CreditCardModule
	],
	declarations: [
		RegisterComponent
	],
	exports: [
		RegisterComponent
	]
})
export class RegisterModule { }
