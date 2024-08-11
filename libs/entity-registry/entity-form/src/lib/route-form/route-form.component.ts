import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractFormComponent } from '../abstract-form.component';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService, UserService, VehicleService } from '@profolio/frontend/services';
import { OrderInterface, RouteInterface, UserInterface, VehicleInterface } from '@profolio/interfaces';
import { BasicInputComponent, DropDownComponent, FormButtonsComponent } from '@profolio/frontend/shared/ui';

@Component({
  selector: 'lib-route-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormButtonsComponent, BasicInputComponent, DropDownComponent],
  templateUrl: './route-form.component.html',
  styleUrl: './route-form.component.css',
})
export class RouteFormComponent extends AbstractFormComponent<RouteInterface> implements OnInit {
  orders = signal<OrderInterface[]>([]);
  drivers = signal<UserInterface[]>([]);
  vehicles = signal<VehicleInterface[]>([]);

  private orderService = inject(OrderService);
  private userService = inject(UserService);
  private vehicleService = inject(VehicleService);

  override ngOnInit() {
    super.ngOnInit();
    this.loadData();
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

  private loadData(): void {
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
}
