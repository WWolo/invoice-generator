import { computed, Injectable, signal } from '@angular/core';
import { InvoiceItem } from '../../models/invoice-item';
@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoiceItemsSignal = signal<InvoiceItem[]>([]);

  invoiceItems = this.invoiceItemsSignal.asReadonly();

  totalAmount = computed(() =>
    this.invoiceItemsSignal().reduce((total, item) => total + item.count * item.price, 0)
  );

  setItems(items: InvoiceItem[]) {
    this.invoiceItemsSignal.set(items);
  }

  clearItems() {
    this.invoiceItemsSignal.set([]);
  }
}
