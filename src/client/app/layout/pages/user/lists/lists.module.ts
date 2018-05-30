import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// RELATED
import { ListsComponent } from './lists.component';


// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [
		ListsComponent
	],
	exports: [
		ListsComponent
	]
})
export class ListsModule { }
