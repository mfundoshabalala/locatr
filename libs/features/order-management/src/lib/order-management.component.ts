import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderInterface } from '@profolio/interfaces';

import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderService } from './services/order.service';
import { AbstractDashboardComponent } from '@profolio/core';

@Component({
  selector: 'lib-order-management',
  standalone: true,
  imports: [CommonModule, OrderListComponent],
  template: `
    <lib-order-list
      [entities]="entityList()"
      (entityUpdated)="onEntityUpdate($event)"
      (entitySelected)="onEntityRead($event)"
      (entityDeleted)="onEntityDelete($event)">
    </lib-order-list> `,
  styleUrl: './order-management.component.css',
})
export class OrderManagementComponent extends AbstractDashboardComponent<OrderInterface> {
  protected override service = inject(OrderService);
  protected override entityName = 'order';
  protected override listComponent = OrderListComponent;
  protected override formComponent = OrderFormComponent;
}
