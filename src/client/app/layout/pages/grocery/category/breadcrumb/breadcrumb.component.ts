import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { API } from "../../../../../core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'breadcrumb',
  templateUrl: 'breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {

	private f = {};
	private menu = [];
	private cat;
	private sub;
  private subc;
  
  constructor(meta: Meta, title: Title, private route: ActivatedRoute, private api: API, private http: Http) {
    this.route.params.subscribe(params => {
      this.cat = params['cat'];
      this.sub = params['sub'];
      this.subc = params['sub-sub'];
    });

    this.http.get('/assets/json/category.json').map((r: Response) => r.json()).subscribe(res => {
      this.menu = res['groceries']['categories'];

      this.menu.forEach((b) => {
        if (b['name'].toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, '-').replace(/-{2,}/g, '-') === this.cat) {
          this.f[0] = b['name'];
          
          if (b['category']) {
            b['category'].forEach((c) => {
              if (c['name'].toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, '-').replace(/-{2,}/g, '-') === this.sub) {
                this.f[1] = c['name'];
                
                if (c['sub']) {
                  c['sub'].forEach((d) => {
                    if (d['name'].toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, '-').replace(/-{2,}/g, '-') === this.subc) {
                      this.f[2] = d['name'];
                    }
                  })
                }
              }
            })
          }
        }
      })
    });
  }

  ngOnInit() {
    
  }
}
