import { Injectable } from '@angular/core';

import { AbstractService } from './abstract.service';
import { OrderInterface } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class OrderService extends AbstractService<OrderInterface> {
  protected baseUrl = 'http://localhost:3000/api/order';
}
