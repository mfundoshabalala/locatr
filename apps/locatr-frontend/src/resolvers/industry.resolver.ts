import { inject } from '@angular/core';
import type { ResolveFn } from '@angular/router';
import { IndustryInterface } from '@profolio/interfaces';
import { IndustryService } from '../services/industry.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const industryResolver: ResolveFn<IndustryInterface[]> = async (_route, _state) => {
  const industryService = inject(IndustryService);
  return await industryService.getIndustryList();
};
