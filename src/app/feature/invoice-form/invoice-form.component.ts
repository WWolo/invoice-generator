import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InvoiceItem } from '../../models/invoice-item';
import { ItemForm } from '../../models/item-form';
import { InvoiceService } from '../../shared/services/invoice.service';
import { InvoiceItemFormComponent } from './components/invoice-item-form/invoice-item-form.component';

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InvoiceItemFormComponent],
  templateUrl: './invoice-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private invoiceService = inject(InvoiceService);

  invoiceForm = this.fb.group({
    items: this.fb.array([]),
  });

  get items() {
    return this.invoiceForm.get('items') as FormArray<FormGroup<ItemForm>>;
  }

  addItem() {
    const itemForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      count: [0, [Validators.required, Validators.min(1), Validators.max(100)]],
      price: [0, [Validators.required, Validators.min(1), Validators.max(1000000)]],
    }) as FormGroup<ItemForm>;
    this.items.push(itemForm);
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onSubmit() {
    if (this.invoiceForm.valid && this.items.length > 0) {
      const invoiceItems: InvoiceItem[] = this.items.getRawValue();
      this.invoiceService.setItems(invoiceItems);
      this.router.navigate(['/summary']);
    } else {
      if (this.items.length === 0) {
        alert('Please add items');
      }
      this.items.markAllAsTouched();
    }
  }
}
