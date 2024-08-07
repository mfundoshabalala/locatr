import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OrderType, OrderStatus, OrderPriority, ClientInterface } from '@profolio/interfaces';

import { AbstractFormComponent } from '../abstract-form.component';
import { ClientService } from '@profolio/frontend/services';

@Component({
  selector: 'lib-order-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css',
})
export class OrderFormComponent extends AbstractFormComponent {
  orderTypes = Object.values(OrderType);
  orderStatuses = Object.values(OrderStatus);
  orderPriorities = Object.values(OrderPriority);
  clients: ClientInterface[] = [];

  constructor(private clientService: ClientService) {
    super();
    this.clientService.getAll().then((clients) => this.clients = clients);
  }

  protected override createForm(): FormGroup {
    return this.fb.group({
      orderNumber: ['', [Validators.required]],
      client: ['', [Validators.required]],
      pickupAddress: ['', [Validators.required]],
      deliveryAddress: ['', [Validators.required]],
      type: ['', [Validators.required]],
      status: ['', [Validators.required]],
      priority: ['', [Validators.required]],
    });
  }
}
