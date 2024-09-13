import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  {
    path: 'form',
    loadComponent: () =>
      import('./feature/invoice-form/invoice-form.component').then((m) => m.InvoiceFormComponent),
  },
  {
    path: 'summary',
    loadComponent: () =>
      import('./feature/invoice-summary/invoice-summary.component').then(
        (m) => m.InvoiceSummaryComponent
      ),
  },
];
