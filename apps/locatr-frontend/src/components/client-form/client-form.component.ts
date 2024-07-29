import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ClientService } from '../../services';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { ClientEntity } from '@profolio/interfaces';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchBoxComponent],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent {
  clientForm!: FormGroup;
  formSubmitted = output();

  private readonly fb = inject(FormBuilder);
  private readonly clientService = inject(ClientService);

  constructor() {
    this.clientForm = this.fb.group({
      client: this.fb.group({
        name: ['', Validators.required],
        website: ['', Validators.pattern('https?://.+')],
        businessHours: [''],
        notes: [''],
        services: [''],
      }),
      contact: this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.email],
        phone: ['', Validators.pattern('^0[1-9]{1}[0-9]{8}$')],
      }),
      site: this.fb.group({
        name: ['', Validators.required],
        description: [''],
        address: ['', Validators.required],
        latitude: ['', this.validateCoordinate],
        longitude: ['', this.validateCoordinate],
      }),
    });

    this.clientForm.valueChanges
  }

  onPlaceChange = (place: google.maps.places.PlaceResult) => {
    this.clientForm.get('site')?.patchValue({
      address: place.formatted_address,
      latitude: place.geometry?.location?.lat(),
      longitude: place.geometry?.location?.lng(),
    });
  };

  private validateCoordinate(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    const isValid = /^-?\d+(\.\d+)?$/.test(value);
    return isValid ? null : { invalidCoordinate: true };
  }

  async onSubmit() {
    if (this.clientForm.valid) {
      const clientEntity: ClientEntity = {
        ...this.clientForm.value.client,
        contact: { ...this.clientForm.value.contact },
        site: { ...this.clientForm.value.site },
      };
      await this.clientService.createClient(clientEntity);
      this.clientForm.reset();
      this.formSubmitted.emit();
    } else {
      console.log('Form is invalid'); //TODO: put this in a toaster
    }
  }
}
