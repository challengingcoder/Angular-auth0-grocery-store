import { Input, Component, ChangeDetectionStrategy, OnInit, Output, EventEmitter } from "@angular/core";
import { Product } from "../../../../../../core";

@Component({
  selector: 'brand',
  templateUrl: './brand.component.html',
})
export class BrandComponent implements OnInit {
  @Input() availableFilters: Product[] = [];
  @Input() activatedFilters: Product[] = [];
  @Output() activeFilters: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  
  constructor(){

  }

  ngOnInit(){
    
  }

  public filterActive(filter: Product): boolean {
    return this.activatedFilters.find(x =>x.brand === filter.brand) != null;
  }

  public changeFilterStatus(filter: Product) {
    this.activeFilters.emit([filter]);
  }
}