import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Input, EventEmitter, Output, signal, effect } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ClientEntity } from '@profolio/interfaces';
import { SearchBoxComponent } from '../search-box/search-box.component';

export enum FormMode {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
};

interface FormSubmission {
  mode: FormMode;
  entity: Record<string, any> | null;
  changed: boolean;
};

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchBoxComponent],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent implements OnInit {
  clientForm!: FormGroup;

  @Input() entityName: string | null = null;  // TODO: change to input signal
  @Input() entity: ClientEntity | null = null; // TODO: change to input signal
  @Output() formSubmitted = new EventEmitter<FormSubmission>(); //TODO: change output signal
  changed = signal<boolean>(false);

  private readonly fb = inject(FormBuilder);

  constructor() {
    this.createEmptyForm();
  }

  ngOnInit() {
    if (this.entity) this.populateForm(this.entity);
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
        latitude: ['', this.validateCoordinate],
        longitude: ['', this.validateCoordinate],
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
    if (!this.clientForm.valid) {
      this.showInvalidFormNotification();
      return;
    }

    let mode: FormMode = FormMode.CREATE;
    let entity = this.extractClientData(this.clientForm.value) as Record<string, any>;
    if (this.entity && this.entity?.id) {
      mode = FormMode.UPDATE;
      entity = {
        ...this.entity,
        ...entity,
        site: {...this.entity.site, ...entity['site']},
        contact:{...this.entity.contact, ...entity['contact']},
      };
    }
    // see if the form has changed
    if (this.clientForm.touched) {
      this.changed.set(true);
    }
    // TODO: add a confirmation dialog before submitting the form

    this.formSubmitted.emit({ entity: entity, mode: mode, changed: this.changed() });
    this.clientForm.reset();
  }

  private extractClientData(formValues: Record<string, any>): ClientEntity {
    const { client, contact, site } = formValues;
    return {
      ...client,
      contact: { ...contact },
      site: { ...site },
    };
  }

  private showInvalidFormNotification(): void {
    console.log('Form is invalid'); // TODO: replace with a toaster notification
  }

  onEdit() {
    this.clientForm.enable();
  }

  onClear() {
    this.clientForm.reset();
  }

  onDelete() {
    const entityID = this.entity?.id;
    if (entityID !== undefined) {
      this.formSubmitted.emit({ entity: this.entity as Record<string, any>, mode: FormMode.DELETE, changed: this.changed() });
    }
  }
}
