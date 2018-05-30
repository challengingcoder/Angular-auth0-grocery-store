import { Input, Component, ChangeDetectionStrategy, OnInit, Output, EventEmitter } from "@angular/core";
import { Product } from "../../../../../../core";

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent implements OnInit {
  
  @Input() availableFilters: Product[] = [];
  @Input() activatedFilters: Product[] = [];
  @Output() activeFilters: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  
  constructor(){

  }

  ngOnInit(){
    
  }

  public filterActive(filter: Product): boolean {
    return this.activatedFilters.find(x =>x.rating === filter.rating) != null;
  }

  public changeFilterStatus(filter: Product) {
    this.activeFilters.emit([filter]);
  }
}