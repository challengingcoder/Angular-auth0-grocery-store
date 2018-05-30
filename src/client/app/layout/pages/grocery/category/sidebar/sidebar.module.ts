import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// RELATED
import { SidebarComponent } from './sidebar.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { OfferComponent } from './offer/offer.component';
import { PriceComponent } from './price/price.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

	],
	declarations: [
    SidebarComponent,
    BrandComponent,
    CategoryComponent,
    OfferComponent,
    PriceComponent,
    RatingComponent
	],
	exports: [
    SidebarComponent,
    BrandComponent,
    CategoryComponent,
    OfferComponent,
    PriceComponent,
    RatingComponent
	]
})
export class SidebarModule { }
