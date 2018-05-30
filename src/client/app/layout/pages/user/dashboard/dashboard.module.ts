import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { DashboardComponent } from './dashboard.component';


// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
    	RouterModule
	],
	declarations: [
		DashboardComponent
	],
	exports: [
		DashboardComponent
	]
})
export class DashboardModule { }
