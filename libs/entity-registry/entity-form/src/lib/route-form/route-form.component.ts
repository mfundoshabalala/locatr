import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractFormComponent } from '../abstract-form.component';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService, UserService, VehicleService } from '@profolio/frontend/services';
import { OrderInterface, UserInterface, VehicleInterface } from '@profolio/interfaces';

@Component({
  selector: 'lib-route-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './route-form.component.html',
  styleUrl: './route-form.component.css',
})
export class RouteFormComponent extends AbstractFormComponent {
  orders = signal<OrderInterface[]>([]);
  drivers = signal<UserInterface[]>([]);
  vehicles = signal<VehicleInterface[]>([]);

  private orderService = inject(OrderService);
  private userService = inject(UserService);
  private vehicleService = inject(VehicleService);

  constructor() {
    super();
    this.userService.getAll().then((drivers) => {
      this.drivers.update(() => drivers);
    });
    this.vehicleService.getAll().then((vehicles) => {
      this.vehicles.update(() => vehicles);
    });
    this.orderService.getAll().then((orders) => {
      this.orders.update(() => orders);
    });
  }

  protected override createForm(): FormGroup {
    return this.fb.group({
      order: ['', Validators.required],
      driver: ['', Validators.required],
      vehicle: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      routePath: ['', Validators.required]
    });
  }
}
