import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ForgotPasswordComponent } from './forgot-password.component';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		ForgotPasswordComponent,
	],
	exports: [
		ForgotPasswordComponent,
	]
})
export class ForgotPasswordModule { }
