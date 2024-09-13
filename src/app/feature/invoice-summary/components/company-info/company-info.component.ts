import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Company } from '../../../../models/company';
import { PhoneFormatPipe } from '../../../../shared/pipes/phone-format.pipe';

@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [CommonModule, PhoneFormatPipe],
  templateUrl: './company-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyInfoComponent {
  company = input.required<Company>();
}
