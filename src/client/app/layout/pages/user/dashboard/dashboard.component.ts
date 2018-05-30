import { Component, OnInit } from '@angular/core';

// SEO
import { Meta, Title } from '@angular/platform-browser';
import { AuthService } from '../../../../core';

// COMPONENT
@Component({
	moduleId: module.id,
	selector: 'dashboard',
	templateUrl: 'dashboard.component.html',
})

// CLASS
export class DashboardComponent implements OnInit {
	profile: any;
	load: boolean;

	constructor(meta: Meta, title: Title, private AS: AuthService) {
		title.setTitle('Find where your groceries are in the market - Grocery Finder');
		if(this.AS.isAuthenticated()){
			this.AS.getProfile((err, profile) => {
					this.profile = profile;
					this.load = true;
			})				
		}

	}

	ngOnInit() {
	}


}
