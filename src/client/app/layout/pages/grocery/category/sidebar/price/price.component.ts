import { Input, Component, ChangeDetectionStrategy, OnInit, Output, EventEmitter } from "@angular/core";
import { Product } from "../../../../../../core";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'price',
  templateUrl: './price.component.html',
})
export class PriceComponent implements OnInit {
  private price: FormGroup;
  private submit: boolean;
  
  @Input() availableFilters: Product[] = [];
  @Input() activatedFilters: Product[] = [];
  @Output() activeFilters: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  
  constructor(private fb: FormBuilder){
    this.submit = false;
  }

  // price function
  // find high and low of query of price, split into 10 $ segments
  // add range go button

  public filterActive(filter: Product): boolean {
    return this.activatedFilters.find(x =>x.price === filter.price) != null;
  }

  public changeFilterStatus(filter: Product) {
    this.activeFilters.emit([filter]);
  }

  ngOnInit(){
    this.form();
  }

  private form() {
    return this.price = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required]
    });
  }

  private click(from, to){
    this.submit = true;
    // to do.
  }
}