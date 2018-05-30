import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// SEO
import { Meta, Title } from '@angular/platform-browser';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'credit-card',
	templateUrl: 'credit-card.component.html'
})

export class CreditCardComponent implements OnInit {


	constructor(public router: Router, title: Title, private fb: FormBuilder) {

	}

	ngOnInit() {
	}

}
