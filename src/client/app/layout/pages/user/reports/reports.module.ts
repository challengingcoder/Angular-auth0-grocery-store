import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// RELATED
import { ReportsComponent } from './reports.component';

// KENDO UI
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DropDownsModule
	],
	declarations: [
		ReportsComponent
	],
	exports: [
		ReportsComponent
	]
})
export class ReportsModule { }
