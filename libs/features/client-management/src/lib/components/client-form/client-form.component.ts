import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientInterface } from '@profolio/interfaces';
import { AbstractFormComponent } from '@profolio/core';
import { BasicInputComponent, BasicTextAreaComponent, DropDownComponent, FormButtonsComponent, SearchBoxComponent } from '@profolio/frontend/shared/ui';

@Component({
  selector: 'lib-client-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchBoxComponent,
    FormButtonsComponent,
    BasicInputComponent,
    BasicTextAreaComponent,
    DropDownComponent,
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css',
})
export class ClientFormComponent extends AbstractFormComponent<ClientInterface> {
  protected override createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      businessHours: [],
      website: '',
      notes: '',
      services: [],
      contact: this.fb.group({
        name: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.email],
      }),
      site: this.fb.group({
        name: ['', Validators.required],
        description: '',
        address: ['', Validators.required],
        latitude: '',
        longitude: '',
      }),
    });
  }

  protected override initializeForm(entity: ClientInterface): void {
    if (entity) {
      this.entityForm.patchValue(entity);
    }
  }

  onPlaceChange = (place: google.maps.places.PlaceResult) => {
    this.entityForm.get('site')?.patchValue({
      address: place.formatted_address,
      latitude: place.geometry?.location?.lat(),
      longitude: place.geometry?.location?.lng(),
    });
  };
}
