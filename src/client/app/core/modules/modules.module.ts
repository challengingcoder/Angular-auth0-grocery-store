import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { SliderComponent, SliderItemElement } from './slider/slider.component';
import { SliderItemDirective } from './slider/slider.directive';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';


// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [
		SliderComponent,
		SliderItemDirective,
		SliderItemElement,
		SearchComponent
	],
	exports: [
		SliderComponent,
		SliderItemDirective,
		SliderItemElement,
		SearchComponent
	]
})
export class Modules { }
