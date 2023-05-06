import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss'],
})
export class ProductInformationComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() iconUrl!: string;
}
