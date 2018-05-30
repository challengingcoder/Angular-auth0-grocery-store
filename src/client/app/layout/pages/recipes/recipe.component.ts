import { Component, OnInit } from '@angular/core';

// SEO
import { Meta, Title } from '@angular/platform-browser';
import { API } from '../../../core';

// COMPONENT
@Component({
	moduleId: module.id,
	selector: 'recipe',
	templateUrl: 'recipe.component.html',
})

// CLASS
export class RecipeComponent implements OnInit {
	public recipes = [];

	constructor(meta: Meta, title: Title, private api: API) {
		title.setTitle('Find where your groceries are in the market - Grocery Finder');

	}

	ngOnInit() {
		// If no default value in Status input, set filter to empty array
		this.receipe();
	}

	receipe(){
		this.api.edamam('').subscribe( res => {
			this.recipes = res;
			console.log(this.recipes);
		})
	}

}
