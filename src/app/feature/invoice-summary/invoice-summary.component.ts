import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { InvoiceService } from '../../shared/services/invoice.service';
import { CompanyService } from './invoice-summary.service';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { InvoiceItemsListComponent } from './components/invoice-items-list/invoice-items-list.component';

@Component({
  selector: 'app-invoice-summary',
  standalone: true,
  imports: [CommonModule, CompanyInfoComponent, InvoiceItemsListComponent],
  templateUrl: './invoice-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceSummaryComponent {
  private invoiceService = inject(InvoiceService);
  private companyService = inject(CompanyService);

  company = toSignal(this.companyService.getCompanyInfo());
  invoiceItems = this.invoiceService.invoiceItems;
  totalAmount = this.invoiceService.totalAmount();
}
