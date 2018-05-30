import { Component, OnInit, ViewChild, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// SEO
import { Meta, Title } from '@angular/platform-browser';

import { AuthService } from '../../../../core/index';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'login',
	templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit, AfterViewInit {
	public login: FormGroup;
	public submit: boolean;
	public message: any;
	show: boolean;
	member: boolean;

	@ViewChild('email') email: ElementRef;
	@ViewChild('pass') pass: ElementRef;

	constructor(public router: Router, title: Title, private AS: AuthService, private fb: FormBuilder, private renderer: Renderer) {
		title.setTitle('Log In - Grceri');
		this.submit = false;

		this.show = false;
	}

	ngOnInit() {
		this.form();
	}


	ngAfterViewInit() {
		// EMAIL FOCUS
		this.renderer.invokeElementMethod(this.email.nativeElement, 'focus');
	}

	private form() {
		return this.login = this.fb.group({
			email: ['', Validators.email],
			password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
			rememberme: ['']
		});
	}

	click(email, password, rememberme) {
		this.submit = true;

		this.AS.login(email, password, rememberme);
	}

	password() {
		this.show = !this.show;
		this.renderer.invokeElementMethod(this.pass.nativeElement, 'focus');
	}
}
