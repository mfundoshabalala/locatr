import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ClientService } from '../../services';
import { SearchBoxComponent } from '../search-box/search-box.component';

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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onPlaceChange = (place: google.maps.places.PlaceResult) => {
    this.clientForm.patchValue({
      address: place.formatted_address,
    });
  }

  onSubmit() {
    const client = {
      name: this.clientForm.get('name')?.value,
      email: this.clientForm.get('email')?.value,
      phone: this.clientForm.get('phone')?.value,
      address: this.clientForm.get('address')?.value,
    };
    this.clientService.createClient(client);
    this.formSubmitted.emit();
  }
}
