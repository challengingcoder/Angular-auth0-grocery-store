import { Input, Component, ChangeDetectionStrategy, OnInit, Output, EventEmitter } from "@angular/core";
import { Product } from "../../../../../../core";

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  @Input() availableFilters: Product[] = [];
  @Input() activatedFilters: Product[] = [];
  @Output() activeFilters: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  
  constructor(){

  }

  ngOnInit(){
    
  }

  public filterActive(filter: Product): boolean {
    return this.activatedFilters.find(x =>x.category === filter.category) != null;
  }

  public changeFilterStatus(filter: Product) {
    this.activeFilters.emit([filter]);
  }
}