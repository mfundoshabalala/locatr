import { Component, OnInit, input, EventEmitter, Output, inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EntityInterface, FormMode, FormSubmission } from '@profolio/interfaces';
import { deepMerge, extractFormData } from '@profolio/utils';

@Component({
  selector: 'lib-abstract-form',
  template: '',
})
export abstract class AbstractFormComponent implements OnInit {
  protected fb = inject(FormBuilder);
  entity = input<EntityInterface | null>(null);
  @Output() formSubmitted = new EventEmitter<FormSubmission>();

  entityForm!: FormGroup;

  ngOnInit(): void {
    this.entityForm = this.createForm();
    this.initializeForm(this.entity());
  }

  protected abstract createForm(): FormGroup;

  protected initializeForm(data: EntityInterface | null): void {
    if (data) {
      this.entityForm.patchValue(data);
    }
  }

  onSubmit(): void {
    if (this.entityForm.valid) {
      let entity = extractFormData(this.entityForm.value) as EntityInterface | null;
      const mode = this.entity() ? FormMode.UPDATE : FormMode.CREATE;
      entity = this.entity() ? deepMerge(this.entity(), entity) : entity;
      this.emitFormSubmission(mode, entity);
      this.entityForm.reset();
    } else {
      console.log('Form is invalid', this.entityForm.errors);
    }
  }

  private emitFormSubmission(mode: FormMode, entity: EntityInterface | null): void {
    const submission: FormSubmission = {
      mode: mode,
      entity: entity,
      changed: this.entityForm.touched,
    };
    this.formSubmitted.emit(submission);
  }

  onEntityEdit(): void {
    this.entityForm.enable();
  }

  onEntityClear(): void {
    this.entityForm.reset();
  }

  onDelete(): void {
    if (this.entity) {
      this.emitFormSubmission(FormMode.DELETE, this.entity());
    }
  }

  onClose(): void {
    this.emitFormSubmission(FormMode.CLOSE, this.entity());
  }
}

//   onPlaceChange = (place: google.maps.places.PlaceResult) => {
//     this.entityForm.get('site')?.patchValue({
//       address: place.formatted_address,
//       latitude: place.geometry?.location?.lat(),
//       longitude: place.geometry?.location?.lng(),
//     });
//   };
