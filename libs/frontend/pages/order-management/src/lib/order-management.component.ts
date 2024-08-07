import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderListComponent } from '@entity/list';
import { OrderFormComponent } from '@entity/form';
import { OrderInterface } from '@profolio/interfaces';
import { OrderService } from '@profolio/frontend/services';
import { AbstractDashboardComponent } from '@pages/abstract-dashboard';

@Component({
  selector: 'lib-order-management',
  standalone: true,
  imports: [CommonModule, OrderListComponent],
  template:`
    <lib-order-list></lib-order-list>
  `,
  styleUrl: './order-management.component.css',
})
export class OrderManagementComponent extends AbstractDashboardComponent<OrderInterface> {
  protected override service = inject(OrderService);
  protected override entityName = 'order';
  protected override listComponent = OrderListComponent;
  protected override formComponent = OrderFormComponent;
}
