import { CommonModule } from '@angular/common';
import { Component, inject, output, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ClientService } from '../../services';
import { ClientEntity } from '@profolio/interfaces';
import { SearchBoxComponent } from '../search-box/search-box.component';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchBoxComponent],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  clientForm!: FormGroup;
  readonly formSubmitted = output();

  @Input() entity: ClientEntity | undefined;
  @Input() entityName: string | undefined;

  private readonly fb = inject(FormBuilder);
  private readonly clientService = inject(ClientService);

  constructor() {
    this.createEmptyForm();
  }

  ngOnInit() {
    if (this.entity && Object.values(this.entity).length) this.populateForm(this.entity);
  }

  private createEmptyForm(): void {
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
        latitude: new FormControl({ value: '', disabled: true }, this.validateCoordinate),
        longitude: new FormControl({ value: '', disabled: true }, this.validateCoordinate)
      }),
    });
  }

  private populateForm(entity: ClientEntity | undefined): void {
    if (!entity) {
      return;
    }
    this.clientForm.patchValue({
      client: {
        name: entity.name || '',
        website: entity.website || '',
        businessHours: entity.hours || '',
        notes: entity.notes || '',
        services: entity.services || [],
      },
      contact: {
        name: entity.contact?.name || '',
        email: entity.contact?.email || '',
        phone: entity.contact?.phone || '',
      },
      site: {
        name: entity.site?.name || '',
        description: entity.site?.description || '',
        address: entity.site?.address || '',
        latitude: entity.site?.latitude || '',
        longitude: entity.site?.longitude || '',
      },
    });

    if (entity.name) {
      this.clientForm?.disable();
    }
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
    if (this.clientForm.valid && !this.entity?.id) {
      const clientEntity: ClientEntity = {
        ...this.clientForm.value.client,
        contact: { ...this.clientForm.value.contact },
        site: { ...this.clientForm.value.site },
      };
      await this.clientService.createClient(clientEntity);
      this.clientForm.reset();
      this.formSubmitted.emit();
    } else if (this.clientForm.valid && this.entity?.id) {
      const entityID = this.entity?.id;
      const entity = {
        ...this.entity,
        ...this.clientForm.value.client,
        contact: {
          ...this.entity.contact,
          ...this.clientForm.value.contact
        },
        site: {
          ...this.entity.site,
          ...this.clientForm.value.site
        },
      }
      if (entityID && entity ) {
        await this.clientService.updateClient(entityID, entity);
        this.formSubmitted.emit();
      }
    } else {
      console.log('Form is invalid'); //TODO: put this in a toaster
    }
  }

  onEdit() {
    this.clientForm.enable();
  }

  onClear() {
    this.clientForm.reset();
  }

  onDelete() {
    const entityID = this.entity?.id;
    console.log(entityID);
  }
}
