import { Input, Component, ChangeDetectionStrategy, OnInit, Output, EventEmitter } from "@angular/core";
import { Product } from "../../../../../../core";

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
})
export class OfferComponent implements OnInit {
  
  @Input() availableFilters: Product[] = [];
  @Input() activatedFilters: Product[] = [];
  @Output() activeFilters: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  
  constructor(){

  }

  ngOnInit(){
    
  }

  public filterActive(filter: Product): boolean {
    return this.activatedFilters.find(x =>x.offers === filter.offers) != null;
  }

  public changeFilterStatus(filter: Product) {
    this.activeFilters.emit([filter]);
  }
}