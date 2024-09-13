import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../models/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private http = inject(HttpClient);

  getCompanyInfo(): Observable<Company> {
    return this.http.get<Company>('/assets/company.json');
  }
}
