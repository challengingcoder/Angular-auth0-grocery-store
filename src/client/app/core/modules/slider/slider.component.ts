import { AfterViewInit, Component, ContentChildren, Directive, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { SliderItemDirective } from './slider.directive';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';

@Directive({
	selector: '.slider-item'
})
export class SliderItemElement {
}

@Component({
	selector: 'slider',
	exportAs: 'slider',
	templateUrl: 'slider.html'
})

export class SliderComponent implements AfterViewInit {
	@ContentChildren(SliderItemDirective) items: QueryList<SliderItemDirective>;
	@ViewChildren(SliderItemElement, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
	@ViewChild('slider') private Slider: ElementRef;

	@Input() timing = '250ms ease-in';
	@Input() showControls = true;
	@Input() showPagination = true;

	private player: AnimationPlayer;
	private itemWidth: number;
	private currentSlide = 0;
	style = {}

	next() {
		if ( this.currentSlide + 1 === this.items.length ) {
			this.currentSlide = (this.currentSlide + 1) % this.items.length;
			const offset = this.currentSlide * this.itemWidth;
			const myAnimation: AnimationFactory = this.buildAnimation(offset);
			this.player = myAnimation.create(this.Slider.nativeElement);
			this.player.play();
		};

	}

	private buildAnimation( offset ) {
		return this.builder.build([
			animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
		]);
	}

	prev() {
		if ( this.currentSlide === 0 ) {
			this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
			const offset = this.currentSlide * this.itemWidth;

			const myAnimation: AnimationFactory = this.buildAnimation(offset);
			this.player = myAnimation.create(this.Slider.nativeElement);
			this.player.play();
		}

	}

	constructor( private builder: AnimationBuilder ) {
	}

	ngAfterViewInit() {
    // For some reason only here I need to add setTimeout, in my local env it's working without this.
		setTimeout(() => {
			this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
			this.style = {
				width: `${this.itemWidth}px`
			}
		});

	}

}
