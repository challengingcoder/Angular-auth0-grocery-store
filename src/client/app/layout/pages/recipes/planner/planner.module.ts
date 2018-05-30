import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { PlannerComponent } from './planner.component';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		PlannerComponent,
	],
	exports: [
		PlannerComponent,
	]
})
export class PlannerModule { }
