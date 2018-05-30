import { Component, OnInit, Renderer, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// SEO
import { Meta, Title } from '@angular/platform-browser';

import { AuthService } from '../../../../core/index';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, AbstractControl, SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
	selector: 'register',
	templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit, AfterViewInit {
	show: boolean;
	showBilling: boolean;
	showCredentials: boolean;

	register: FormGroup;
	payment: FormGroup;
	plan: string;
	public submit: boolean;
	member: boolean;
	title: string;

	@ViewChild('email') email: ElementRef;
	@ViewChild('pass') pass: ElementRef;

	// PASSWORD
	lowercase: boolean;
	uppercase: boolean;
	number: boolean;
	special: boolean;
	eight: boolean;
	plus50: boolean;
	passwordRequirements: boolean;

	constructor(public router: Router, title: Title, private AS: AuthService, private fb: FormBuilder, private route: ActivatedRoute, private renderer: Renderer) {
		title.setTitle('Sign Up - Grceri');
		this.submit = false;
		this.show = false;
		this.showCredentials = true;
		this.showBilling = false;

		this.route.params.subscribe(params => {
			this.plan = params['plan'];

			if (this.plan) {
				this.member === true;
				this.title = this.plan;
			} else {
				this.title = 'free';
			}
		});
	}

	ngOnInit() {
		this.credentials();
		this.billing();
	}

	ngAfterViewInit() {
		// EMAIL FOCUS
		this.renderer.invokeElementMethod(this.email.nativeElement, 'focus');
	}

	private credentials() {
		return this.register = this.fb.group({
			username: ['', Validators.required, /* this.validateUsername()*/],
			email: ['', Validators.email, /*  this.validateUsername()*/],
			password: ['',
				[
					Validators.required,
					Validators.maxLength(50),
					Validators.minLength(8),
					Validators.pattern('^[a-z][A-Z][0-9][!@#$%^&*()]+$'),
				]
			]
		});
	}

	private billing() {
		return this.payment = this.fb.group({

		})
	}

	click(email, password) {
		this.submit = true;

		if (!this.member) {
			this.AS.signup(email, password);
		} else {

			var sss = 'do with validate if user / email doenst exist';
			if(sss){
				this.showBilling = true;
				this.showCredentials = false;
			}
		}
	}

	password() {
		this.show = !this.show;
		this.renderer.invokeElementMethod(this.pass.nativeElement, 'focus');
	}

	passwordChange(i) {
		let l = i.match('[a-z]');
		let u = i.match('[A-Z]');
		let n = i.match('[0-9]');
		let s = i.match('[!@#$%^&*()]');
		let e = i.length >= 8;
		let f = i.length === 50;

		if (l) {
			this.lowercase = true;
		} else {
			this.lowercase = false;
		}
		if (u) {
			this.uppercase = true;
		} else {
			this.uppercase = false;
		}
		if (n) {
			this.number = true;
		} else {
			this.number = false;
		}
		if (s) {
			this.special = true;
		} else {
			this.special = false;
		}
		if (e) {
			this.eight = true;
		} else {
			this.eight = false;
		}
		if (f) {
			this.plus50 = true;
		} else {
			this.plus50 = false;
		}

		if (l && u && n && s && e && !f) {
			this.passwordRequirements = true;
		} else {
			this.passwordRequirements = false;
		}
	}

	// private validateUsername(): ValidatorFn {
	// 	return (control: AbstractControl): { [key: string]: any } => {
	// 		this.AS.checkUsername(control)
	// 			.subscribe(
	// 				({ data }) => {
	// 					let res: string = data;
	// 					if (res === control.value) {
	// 						return { 'exist': true };
	// 					} else {
	// 						return null
	// 					}
	// 				},
	// 				(error) => {
	// 					console.log(error);
	// 				}
	// 			)
	// 	}
	// }
}
