import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepotInterface } from '@profolio/interfaces';

import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormButtonsComponent, BasicInputComponent, DropDownComponent, SearchBoxComponent } from '@profolio/frontend/shared/ui';
import { AbstractFormComponent } from '@profolio/core';

@Component({
  selector: 'lib-depot-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormButtonsComponent, BasicInputComponent, DropDownComponent, SearchBoxComponent],
  templateUrl: './depot-form.component.html',
  styleUrl: './depot-form.component.css',
})
export class DepotFormComponent extends AbstractFormComponent<DepotInterface> {
  protected override createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      capacity: ['', Validators.required],
    });
  }

  protected override initializeForm(entity: DepotInterface): void {
    if (entity) {
      this.entityForm.patchValue(entity);
    }
  }

  onPlaceChange = (place: google.maps.places.PlaceResult) => {
    this.entityForm?.patchValue({
      address: place.formatted_address,
      latitude: place.geometry?.location?.lat(),
      longitude: place.geometry?.location?.lng(),
    });
  };
}