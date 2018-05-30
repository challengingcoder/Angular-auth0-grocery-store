import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ForgotEmailComponent } from './forgot-email.component';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		ForgotEmailComponent,
	],
	exports: [
		ForgotEmailComponent,
	]
})
export class ForgotEmailModule { }
