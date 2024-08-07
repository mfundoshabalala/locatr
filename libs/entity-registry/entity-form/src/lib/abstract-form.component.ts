import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Input, EventEmitter, Output, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { deepMerge, extractFormData } from '@profolio/utils';
import { FormMode } from '@profolio/interfaces';
import { SearchBoxComponent } from '@profolio/frontend/shared/ui';

export interface FormSubmission {
  mode: FormMode;
  entity: Record<string, any> | null;
  changed: boolean;
}

@Component({
  selector: 'lib-entity-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchBoxComponent],
  // templateUrl: './entity-form.component.html',
  // styleUrls: ['./entity-form.component.css'],
  template: ``
})
export class EntityFormComponent implements OnInit {
  @Input() entityName: string | null = null; // TODO: change to input signal
  @Input() entity: Record<string, any> | null = null; // TODO: change to input signal
  @Input() formStructure: any; // Define the form structure as input
  @Output() formSubmitted = new EventEmitter<FormSubmission>(); // TODO: change to output signal
  changed = signal<boolean>(false);

  entityForm!: FormGroup;
  private readonly fb = inject(FormBuilder);

  constructor() {
    this.createEmptyForm();
  }

  ngOnInit() {
    if (this.entity) this.populateForm(this.entity);
  }

  private createEmptyForm(): void {
    this.entityForm = this.fb.group(this.buildFormGroup(this.formStructure));
  }

  private buildFormGroup(structure: any): any {
    const group: { [key: string]: any } = {}; // Add index signature to the type of 'group'
    Object.keys(structure).forEach((key) => {
      group[key] = this.fb.group(
        Object.keys(structure[key]).reduce((acc: { [key: string]: any }, field) => {
          acc[field] = ['', this.getValidators(structure[key][field])];
          return acc;
        }, {})
      );
    });
    return group;
  }

  private getValidators(validators: any): any[] {
    const formValidators = [];
    if (validators.required) formValidators.push(Validators.required);
    if (validators.pattern) formValidators.push(Validators.pattern(validators.pattern));
    // Add more validators as needed
    return formValidators;
  }

  private populateForm(entity: Record<string, any> | undefined): void {
    if (!entity) {
      return;
    }
    this.entityForm.patchValue(entity);

    if (entity['name']) {
      this.entityForm.disable();
    }
  }

  onPlaceChange = (place: google.maps.places.PlaceResult) => {
    this.entityForm.get('site')?.patchValue({
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
    if (!this.entityForm.valid) {
      this.showInvalidFormNotification();
      return;
    }

    let mode: FormMode = FormMode.CREATE;
    let entity = extractFormData(this.entityForm.value) as any;
    if (this.entity && this.entity?.['id']) {
      mode = FormMode.UPDATE;
      entity = deepMerge(this.entity, entity);
    }

    if (this.entityForm.touched) {
      this.changed.set(true);
    }

    // TODO: add a confirmation dialog before submitting the form

    this.formSubmitted.emit({ entity: entity, mode: mode, changed: this.changed() });
    this.entityForm.reset();
  }

  private showInvalidFormNotification(): void {
    console.log('Form is invalid'); // TODO: replace with a toaster notification
  }

  onEdit() {
    this.entityForm.enable();
  }

  onClear() {
    this.entityForm.reset();
  }

  onDelete() {
    const entityID = this.entity?.['id'];
    if (entityID !== undefined) {
      this.formSubmitted.emit({
        entity: this.entity as Record<string, any>,
        mode: FormMode.DELETE,
        changed: this.changed(),
      });
    }
  }

  onClose() {
    this.formSubmitted.emit({
      entity: this.entity as Record<string, any>,
      mode: FormMode.CLOSE,
      changed: this.changed(),
    });
  }
}
