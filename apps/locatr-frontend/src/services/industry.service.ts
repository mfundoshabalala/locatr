import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IndustryInterface } from '@profolio/interfaces';

@Injectable({providedIn: 'root'})
export class IndustryService {
  private http = inject(HttpClient);

  private industryUrl = 'http://localhost:3000/api/industry';

  async getIndustryList(): Promise<IndustryInterface[]> {
    try {
      return await lastValueFrom(this.http.get<IndustryInterface[]>(this.industryUrl));
    } catch (error) {
      throw new Error(`Error getting client list: ${(error as Error).message}`);
    }
  }
}
