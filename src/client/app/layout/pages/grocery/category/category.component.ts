import { Component, OnInit, Input } from '@angular/core';

// SEO
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { API, DBService, Product, Filter } from '../../../../core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';
// import { ItemFilterComponent } from './filter/filter.component';

// COMPONENT
@Component({
	moduleId: module.id,
	selector: 'category',
	templateUrl: 'category.component.html'
})

// CLASS
export class CategoryComponent implements OnInit {

	private title: string;
	private f = {};
	private menu = [];
	private cat;
	private sub;
  private subc;

  @Input() public items: Product[] = [];

  public readonly filters: Filter[] = [
    <Filter>{color: 'blue'},
    <Filter>{color: 'green'},
    <Filter>{color: 'gray'},
  ];

  public activeFilters: Filter[] = [];

	constructor(meta: Meta, title: Title, private route: ActivatedRoute, private api: API, private db: DBService, private http: Http) {
    this.route.params.subscribe(params => {
      this.cat = params['cat'];
      this.sub = params['sub'];
      this.subc = params['sub-sub'];
    });

    this.http.get('/assets/json/category.json').map((r: Response) => r.json()).subscribe(res => {
      this.menu = res['groceries']['categories'];

      this.menu.forEach((b) => {
        if (b['name'].toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, '-').replace(/-{2,}/g, '-') === this.cat) {

          if (this.cat !== '' && (this.sub === undefined && this.subc === undefined)) {
            this.title = b['name'];
            title.setTitle('Grocery Category: ' + this.title + ' - Grocery Finder');
            meta.addTag({ name: 'description', content: "Find " + this.title + " at the best price, search over 100's of online retailers for the best price. Search your favorite branded " + this.title + " products." })
          }
          if (b['category']) {
            b['category'].forEach((c) => {
              if (c['name'].toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, '-').replace(/-{2,}/g, '-') === this.sub) {

                if (this.sub !== '' && (this.cat !== '' && this.subc === undefined)) {
                  this.title = c['name'];
                  title.setTitle('Grocery Subcategory: ' + this.title + ' - Grocery Finder');
                  meta.addTag({ name: 'description', content: "Find " + this.title + " at the best price, search over 100's of online retailers for the best price. Search your favorite branded " + this.title + " products." })
                }
                if (c['sub']) {
                  c['sub'].forEach((d) => {
                    if (d['name'].toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, '-').replace(/-{2,}/g, '-') === this.subc) {

                      if (this.subc !== '' && (this.cat !== '' && this.sub !== '')) {
                        this.title = d['name'];
                        title.setTitle('Grocery Further Subcategory: ' + this.title + ' - Grocery Finder');
                        meta.addTag({ name: 'description', content: "Find " + this.title + " at the best price, search over 100's of online retailers for the best price. Search your favorite branded " + this.title + " products." })
                      }
                    }
                  })
                }
              }
            })
          }
        }
      })
    })
  }
  
	ngOnInit() {

	}


  // plug sidebar and sort filters into here/
	// public itemsAfterFilter(): Product[] {
  //   return this.items.filter((item: Product) => {
  //     const matchesActiveFilter: boolean = this.activeFilters.reduce((prev, curr) => {
  //       if (item.category.includes(curr.category)) {
  //         return prev && true;
  //       } else {
  //         return false;
  //       }
  //     }, true);

  //     return matchesActiveFilter;
  //   });
  // }

  // public updateActivatedFilters(filters: Filter[]) {
  //   this.activeFilters = this.filters;
  // }
}
