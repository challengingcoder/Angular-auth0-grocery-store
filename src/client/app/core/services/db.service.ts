import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import { Food } from '../index';
import { Observable } from 'rxjs/Rx';

const api = '/api';

@Injectable()
export class DBService {
	constructor(private http: Http) {}

	// GET PRODUCTS
	public getAllProducts() {
		return this.http.get(`${api}/categories`).map((r: Response) => r.json()).catch(this._errorHandler);
	}

	public getProducts(cat) {
		return this.http.get(`${api}/categories/${cat}`).map((r: Response) => r.json()).catch(this._errorHandler);
	}

	public getProduct(cat) {
		return this.http.get(`${api}/categories/${cat}/${cat.id}`).map((r: Response) => r.json()).catch(this._errorHandler);
	}

	// SEARCH
	public postSearch(cat) {
		return this.http.post(`${api}/search/`, cat).catch(this._errorHandler);
	}

	// SLIDER
	public popularFoods() {
		return this.http.get(`${api}/slider/popular`).catch(this._errorHandler);
	}

	public searchedItems() {
		return this.http.get(`${api}/slider/search`).catch(this._errorHandler);
	}

	// USER
	public postUserCart(userId, product) {
		return this.http.post(`${api}/user/${userId}/cart/`, product).catch(this._errorHandler);
	}

	public postUserRecipe(userId, recipe) {
		return this.http.post(`${api}/user/${userId}/recipe/`, recipe).catch(this._errorHandler);
	}


	// addFood(food: Food) {
	// 	return this.http.post<Food>(`${api}/food/`, food);
	// }

	// updateFood(food: Food) {
	// 	return this.http.put<Food>(`${api}/food/${food.id}`, food);
	// }

	private _errorHandler(error: Response) {
		console.error(error);
		return Observable.throw(error || 'Server Error');
	}
}
