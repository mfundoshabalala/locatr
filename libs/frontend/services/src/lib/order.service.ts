import { Injectable } from '@angular/core';

import { AbstractService } from '@profolio/core';
import { OrderInterface } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class OrderService extends AbstractService<OrderInterface> {
  protected baseUrl = process.env["LOCATR_API_URL"] + 'order';
}
