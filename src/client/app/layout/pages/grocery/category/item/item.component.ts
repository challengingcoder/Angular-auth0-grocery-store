import { Input, Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {

  @Input() public id: number;
  @Input() public name: string;
  @Input() public price: number;
  @Input() public currency: string;

  public getCurrency(): string {
    return 'USD';
  }
}