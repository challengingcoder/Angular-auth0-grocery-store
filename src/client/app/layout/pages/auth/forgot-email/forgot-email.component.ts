import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// SEO
import { Meta, Title } from '@angular/platform-browser';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'forgot-email',
	templateUrl: 'forgot-email.component.html'
})

export class ForgotEmailComponent implements OnInit {


	constructor(public router: Router, title: Title, private fb: FormBuilder) {

	}

	ngOnInit() {
	}

}
