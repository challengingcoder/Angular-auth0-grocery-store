import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[sliderItem]'
})
export class SliderItemDirective {

	constructor( public tpl: TemplateRef<any> ) {
	}

}
