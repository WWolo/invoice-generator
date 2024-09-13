import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { InvoiceItem } from '../../../../models/invoice-item';

@Component({
  selector: 'app-invoice-items-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-items-list.component.html',
  styles: `
    .table-header-cell {
      @apply py-2 px-4 border-b text-left text-sm font-medium text-gray-700;
    }

    .table-body-cell {
      @apply py-2 px-4 border-b text-sm text-gray-800;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceItemsListComponent {
  items = input<InvoiceItem[]>();
  totalAmount = input.required<number>();
}
