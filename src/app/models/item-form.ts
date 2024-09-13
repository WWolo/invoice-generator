import { FormControl } from '@angular/forms';

export interface ItemForm {
  name: FormControl<string>;
  count: FormControl<number>;
  price: FormControl<number>;
}
