import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { CategoryComponent } from './category.component';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { SortComponent } from './sort/sort.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SidebarModule } from './sidebar/sidebar.module';


// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		DropDownListModule,
		FormsModule,
		ReactiveFormsModule,
		SidebarModule
	],
	declarations: [
		CategoryComponent,
		ItemComponent,
		SortComponent,
		BreadcrumbComponent,
		PaginationComponent
	],
	exports: [
		CategoryComponent,
		ItemComponent,
		SortComponent,
		BreadcrumbComponent,
		PaginationComponent
	]
})
export class CategoryModule { }
