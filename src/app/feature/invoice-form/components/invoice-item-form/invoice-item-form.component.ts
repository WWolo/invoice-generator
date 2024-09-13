import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ItemForm } from '../../../../models/item-form';
import { ErrorMessageComponent } from '../../../../shared/components/error-message/error-message.component';
import { NumberOnlyDirective } from '../../../../shared/directives/number-only.directive';

@Component({
  selector: 'app-invoice-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ErrorMessageComponent, NumberOnlyDirective],
  templateUrl: './invoice-item-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceItemFormComponent {
  itemForm = input.required<FormGroup<ItemForm>>();
  remove = output();
}
