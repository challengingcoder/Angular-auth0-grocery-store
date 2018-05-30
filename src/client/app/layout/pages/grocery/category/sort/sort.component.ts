import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { Filter } from "../../../../../core/index";

@Component({
  selector: "sort",
  templateUrl: "./sort.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortComponent implements OnInit {
  @Input() availableFilters: Filter[] = [];
  @Input() activatedFilters: Filter[] = [];
  @Output()
  activeFilters: EventEmitter<Filter[]> = new EventEmitter<Filter[]>();

  private sortClass: boolean;
  private listClass: boolean;

  private defaultSort: { text: string; value: number } = {
    text: "Default Sorting",
    value: null
  };

  private sortList: Array<{ text: string; value: number }> = [
    { text: "Sort by Popularity", value: 1 },
    { text: "Sort by Average Rating", value: 2 },
    { text: "Price: High to Low", value: 3 },
    { text: "Price: Low to High", value: 4 }
  ];

  constructor() {}

  ngOnInit() {
    this.sortClass = false;
    this.listClass = true;
  }

  private switch(i) {
    if (i === 1) {
      this.sortClass = !this.sortClass;
      this.listClass = !this.listClass;
    } else {
      this.listClass = !this.listClass;
      this.sortClass = !this.sortClass;
    }
  }
}
