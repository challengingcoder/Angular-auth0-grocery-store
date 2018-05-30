import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { LeftOversComponent } from './left-overs.component';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		LeftOversComponent,
	],
	exports: [
		LeftOversComponent,
	]
})
export class LeftOversModule { }
