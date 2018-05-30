import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { RecipeComponent } from './recipe.component';
import { LeftOversModule } from './left-overs/left-overs.module';
import { PlannerModule } from './planner/planner.module';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,

		// CHILDREN
		LeftOversModule,
		PlannerModule
	],
	declarations: [
		RecipeComponent,
	],
	exports: [
		RecipeComponent,

		// CHILDREN
		LeftOversModule,
		PlannerModule
	]
})
export class ReceipeModule { }
