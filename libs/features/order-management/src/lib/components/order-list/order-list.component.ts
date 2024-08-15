import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderInterface } from '@profolio/interfaces';
import { AbstractListComponent } from '@profolio/core';
import { OrderService } from '../../services/order.service';
import { BadgeComponent } from '@profolio/shared/badge';

@Component({
  selector: 'lib-order-list',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css',
})
export class OrderListComponent extends AbstractListComponent<OrderInterface> {
  protected service = inject(OrderService);
}
