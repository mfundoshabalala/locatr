import * as _ from 'lodash';
import { Component, OnInit, signal, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VehicleType, VehicleInterface, DepotInterface, UserInterface, UserRole } from '@profolio/interfaces';
import { AbstractFormComponent } from '@profolio/core';
import { BasicInputComponent, DropDownComponent, FormButtonsComponent } from '@profolio/frontend/shared/ui';
import { DepotService } from '@features/depot-management';
import { UserService } from '@features/employee-management';

@Component({
  selector: 'lib-vehicle-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormButtonsComponent, BasicInputComponent, DropDownComponent],
  templateUrl: './vehicle-form.component.html',
})
export class VehicleFormComponent extends AbstractFormComponent<VehicleInterface> implements OnInit {
  vehicleTypes = Object.values(VehicleType);
  users = signal<UserInterface[]>([], { equal: _.isEqual });
  depots = signal<DepotInterface[]>([], { equal: _.isEqual });

  private depotService = inject(DepotService);
  private userService = inject(UserService);

  constructor() {
    super();
    effect(() => {
      console.log(this.users())
    });
  }

  override async ngOnInit(): Promise<void> {
    super.ngOnInit();
    await this.loadDepot();
    await this.loadDrivers();
  }

  protected override createForm(): FormGroup {
    return this.fb.group({
      make: ['', [Validators.required, Validators.maxLength(255)]],
      model: ['', [Validators.required, Validators.maxLength(255)]],
      type: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.min(1886), Validators.max(new Date().getFullYear())]],
      licensePlate: ['', [Validators.required, Validators.maxLength(255)]],
      capacity: [null, Validators.min(1)],
      currentLocation: ['', Validators.required],
      driver: [''],
    });
  }

  protected override initializeForm(entity: VehicleInterface): void {
    if (entity) {
      this.entityForm.patchValue(entity);
    }
  }

  private async loadDepot(): Promise<void> {
    await this.depotService.getAll().then((depots) => this.depots.set(depots));
  }

  private async loadDrivers(): Promise<void> {
    await this.userService
      .getAll()
      .then((users) => {
        users = users.filter((user) => user.role === UserRole.DRIVER && !user.assignedVehicle);
        this.users.set(users);
      });
  }
}
