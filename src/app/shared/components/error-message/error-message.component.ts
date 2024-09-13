import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule],
  template: '<span class="error">{{ message() }}</span>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {
  message = input.required<string>();
}
