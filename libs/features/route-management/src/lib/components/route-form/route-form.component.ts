import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractFormComponent } from '@profolio/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderInterface, RouteInterface, UserInterface, VehicleInterface } from '@profolio/interfaces';
import { BasicInputComponent, DropDownComponent, FormButtonsComponent } from '@profolio/frontend/shared/ui';
import { UserService } from '@features/employee-management';
import { VehicleService } from '@features/vehicle-management';
import { OrderService } from '@features/order-management';

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
      startTime: [new Date().toISOString(), Validators.required],
      endTime: [new Date().toISOString(), Validators.required],
      routePath: ['', Validators.required],
    });
  }

  protected override initializeForm(entity: RouteInterface): void {
    if (entity) {
      this.entityForm.patchValue({
        order: entity.order.id,
        driver: entity.driver.id,
        vehicle: entity.vehicle.id,
        startTime: entity.startTime,
        endTime: entity.endTime,
        routePath: entity.routePath
      });
    }
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
