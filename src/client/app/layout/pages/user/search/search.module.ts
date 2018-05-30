import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// RELATED
import { SearchComponent } from './search.component';

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
		SearchComponent
	],
	exports: [
		SearchComponent
	]
})
export class SearchModule { }
