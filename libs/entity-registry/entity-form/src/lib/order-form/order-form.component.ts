import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { OrderType, OrderStatus, OrderPriority, UserInterface } from '@profolio/interfaces';
import { OrderService, UserService } from '@profolio/frontend/services';

@Component({
  selector: 'lib-order-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css',
})
export class OrderFormComponent implements OnInit {
  createOrderForm!: FormGroup;
  orderTypes = Object.values(OrderType);
  orderStatuses = Object.values(OrderStatus);
  orderPriorities = Object.values(OrderPriority);
  users: UserInterface[] = [];

  constructor(private fb: FormBuilder, private orderService: OrderService, private userService: UserService) {
    this.userService.getAll().then((users) => this.users = users);
  }

  ngOnInit(): void {
    this.createOrderForm = this.fb.group({
      orderNumber: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      pickupAddress: ['', [Validators.required]],
      deliveryAddress: ['', [Validators.required]],
      type: ['', [Validators.required]],
      status: ['', [Validators.required]],
      priority: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.createOrderForm.valid) {
      this.orderService.create(this.createOrderForm.value).then((order) => {
        console.log('Order created', order);
      });
    }
  }
}
