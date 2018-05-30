import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { environment } from '../../../environments/environment';

export let api = '';

@Injectable()
export class API {

	constructor(private http: Http) {}

	// QUERIES
	public nutritionix(apiname: string): Observable<any[]> {
		let url = 'https://trackapi.nutritionix.com/v2/';

		api = url + apiname;

		let nutritionixoptions = new RequestOptions({ 
			headers: new Headers({ 
				'x-app-id': '4308b89b',
				'x-app-key': '284b707371c995f6dd35c321ac4436ee'
			})
	 });

		return this.http.get(api, nutritionixoptions).map((r: Response) => r.json()).catch(this._errorHandler);
	}

	public upcitemdb(type: string, s: string,): Observable<any[]> {
		let url = 'https://api.upcitemdb.com/prod/trial/';
		if(type == "search"){
			api = url + 'search?s=' + s;
		} else {
			api = url + 'lookup?upc=' + s;	
		}
		return this.http.get(api).map((r: Response) => r.json()).catch(this._errorHandler);
	}

	public edamam(q: string){
		let key = '4d0a4d5ca7ebb87aec61dd4256e6f369';
		let id = '8a2e1f02';
		let url = 'https://api.edamam.com/search?q='+q+'&app_id='+id+'&app_key='+key+'';

		return this.http.get(url).map((r: Response) => r.json()).catch(this._errorHandler);
	}

	private _errorHandler(error: Response) {
		console.error(error);
		return Observable.throw(error || 'Server Error');
	}
}
