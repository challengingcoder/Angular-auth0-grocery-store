import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
	HomeComponent,
	NotFoundComponent,
	CouponComponent,
	CartComponent,
	CheckoutComponent,
	MobileAppComponent,
	ProductComponent,
	GroceryComponent,
	CategoryComponent,
	LoginComponent,
	RegisterComponent,
	SettingsComponent,
	CallbackComponent,
	FavoritesComponent,
	RecipeComponent,
	HistoryComponent,
	PasswordComponent,
	PlannerComponent,
	LeftOversComponent,
	PricingComponent,
	ForgotPasswordComponent,
	ForgotEmailComponent,
	DashboardComponent,
	UserComponent,
	ConfirmationComponent
} from './layout/pages/index';

import { AuthGuardService } from './core/index';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', component: HomeComponent, pathMatch: 'full' },
			{ path: '404', component: NotFoundComponent },
			{ path: 'cart', component: CartComponent },
			{ path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService] },
			{ path: 'confirmation', component: ConfirmationComponent, canActivate: [AuthGuardService] },
			{ path: 'callback', component: CallbackComponent },
			{ path: 'coupons', component: CouponComponent, canActivate: [AuthGuardService] },
			{ path: 'mobile-app', component: MobileAppComponent },
			{ path: 'groceries', component: GroceryComponent },
			{ path: 'groceries/:cat', component: CategoryComponent },
			{ path: 'groceries/:cat/:sub', component: CategoryComponent },
			{ path: 'groceries/:cat/:sub/:sub-sub', component: CategoryComponent },
			{ path: 'groceries/:cat/:sub/:sub-sub/:product', component: ProductComponent },
			{ path: 'login', component: LoginComponent },
			{ path: 'sign-up', component: RegisterComponent },
			{ path: 'sign-up/:plan', component: RegisterComponent },
			{ path: 'forgot-password', component: ForgotPasswordComponent },
			{ path: 'forgot-email', component: ForgotEmailComponent },
			{ path: 'pricing', component: PricingComponent},
			{ path: 'recipes', component: RecipeComponent,
				children: [
					{ path: 'planner', component: PlannerComponent, canActivate: [AuthGuardService] },
					{ path: 'left-overs', component: LeftOversComponent},
					{ path: 'menus', component: LeftOversComponent},
					{ path: 'seasonal', component: LeftOversComponent},
					{ path: 'seasonal/:cat', component: LeftOversComponent},
					{ path: 'course', component: LeftOversComponent},
					{ path: 'course/:cat', component: LeftOversComponent},
				]
			},
			{ path: 'user', component: UserComponent, canActivate: [AuthGuardService],
				children: [
					{ path: '', component: DashboardComponent},
					{ path: 'settings', component: SettingsComponent,
						children: [
							{ path: 'account',
								children: [
									{ path: 'manage-data', component: PasswordComponent },
									{ path: 'notifications', component: PasswordComponent },
									{ path: 'password', component: PasswordComponent },
									{ path: 'pause-delete', component: PasswordComponent },
									{ path: 'profile', component: PasswordComponent },
								]
							},
							{ path: 'billing', component: PasswordComponent,
								children: [
									{ path: 'history', component: PasswordComponent },
									{ path: 'info', component: PasswordComponent },
									{ path: 'subscription', component: PasswordComponent }
								]
							},
							// { path: 'extras', component: PasswordComponent,
							// 	children: [
							// 		{ path: 'rewards', component: PasswordComponent },
							// 	]
							// },
						]
					},
					{ path: 'history', component: HistoryComponent },
					{ path: 'favorites', component: FavoritesComponent },
					{ path: 'lists', component: HistoryComponent },
					{ path: 'reports', component: FavoritesComponent },
					{ path: 'support', component: PasswordComponent },
				]
			}
		])
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
