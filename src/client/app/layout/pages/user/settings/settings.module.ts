import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// RELATED
import { SettingsComponent } from './settings.component';

// KENDO UI
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BillingModule } from './billing/billing.module';
import { AccountModule } from './account/account.module';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DropDownsModule,
		BillingModule,
		AccountModule
	],
	declarations: [
		SettingsComponent
	],
	exports: [
		SettingsComponent
	]
})
export class SettingsModule { }
