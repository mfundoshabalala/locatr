import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OrderType, OrderStatus, OrderPriority, UserInterface } from '@profolio/interfaces';
import { UserService } from '@profolio/frontend/services';
import { AbstractFormComponent } from '@entity/form';

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
  users: UserInterface[] = [];

  constructor(private userService: UserService) {
    super();
    this.userService.getAll().then((users) => this.users = users);
  }

  protected override createForm(): FormGroup {
    return this.fb.group({
      orderNumber: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      pickupAddress: ['', [Validators.required]],
      deliveryAddress: ['', [Validators.required]],
      type: ['', [Validators.required]],
      status: ['', [Validators.required]],
      priority: ['', [Validators.required]],
    });
  }
}
