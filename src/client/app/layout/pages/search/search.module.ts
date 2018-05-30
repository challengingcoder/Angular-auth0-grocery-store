import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { SearchComponent } from './search.component';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		SearchComponent,
	],
	exports: [
		SearchComponent,
	]
})
export class SearchModule { }
