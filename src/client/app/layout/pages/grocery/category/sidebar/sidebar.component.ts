import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Filter } from '../../../../../core';

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

  @Input() availableFilters: Filter[] = [];
  @Input() activatedFilters: Filter[] = [];
  @Output() activeFilters: EventEmitter<Filter[]> = new EventEmitter<Filter[]>();

	private toggle = {};

  constructor() {
  }

  ngOnInit() {
  }

  // put filters here.
  // public filterActive(filter: Filter): boolean {
  //   return this.activatedFilters.find({
  //     x => x.rating === filter.rating
  //   }) != null;
  // }

  // public changeFilterStatus(filter: Filter) {
  //   this.activeFilters.emit([filter]);
  // }
}