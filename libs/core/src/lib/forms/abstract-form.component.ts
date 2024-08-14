import { Component, OnInit, EventEmitter, Output, inject, input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EntityInterface, FormMode, FormSubmission } from '@profolio/interfaces';
import { deepMerge, extractFormData } from '@profolio/utils';
import { ReactiveFormsModule } from '@angular/forms'; // Add this line
import { CommonModule } from '@angular/common';
import { ToasterService } from '@toaster';

@Component({
  selector: 'lib-abstract-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: ``,
})
export abstract class AbstractFormComponent<T extends EntityInterface> implements OnInit, OnChanges {
  entity = input<T | null>(null);
  @Output() formSubmitted = new EventEmitter<FormSubmission<T>>();
  entityForm!: FormGroup;

  protected fb = inject(FormBuilder);
  private toasterService = inject(ToasterService);

  ngOnInit(): void {
    this.entityForm = this.createForm();
    this.initializeForm(this.entity());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['entity']) {
      this.initializeForm(changes['entity'].currentValue);
    }
  }

  /**
   * Creates the form structure.
   * Must be implemented by derived classes.
   */
  protected abstract createForm(): FormGroup;

  /**
   * Populates the form with data from the entity.
   */
  protected initializeForm(data: T | null): void {
    if (data) {
      this.entityForm.patchValue(data);
    }
  }

  editMode() {
    return !!this.entity();
  }

  canSave() {
    return this.entityForm.valid && this.entityForm.touched;
  }

  canDelete() {
    return this.editMode();
  }

  canCancel() {
    return this.entityForm.touched && this.entityForm.dirty;
  }

  canClear() {
    return this.entityForm.touched && this.entityForm.dirty;
  }

  /**
   * Handles form submission.
   * Merges entity data if it's an update.
   */
  onSubmit(): void {
    if (this.entityForm.valid) {
      let entity = extractFormData(this.entityForm.value) as T | null;
      const mode = this.editMode() ? FormMode.UPDATE : FormMode.CREATE;
      entity = this.editMode() ? deepMerge(this.entity(), entity) : entity;
      this.emitFormSubmission(mode, entity);
      this.entityForm.reset();
    } else {
      // Collect all error messages
      const errorMessages: string[] = [];
      // Loop through the errors on the form group
      Object.keys(this.entityForm.errors || {}).forEach((errorKey) => {
        const errorValue = this.entityForm.errors?.[errorKey];
        switch (errorKey) {
          case 'required':
            errorMessages.push('Some required fields are missing.');
            break;
          case 'minlength':
            errorMessages.push(`Minimum length required: ${errorValue.requiredLength}.`);
            break;
          case 'maxlength':
            errorMessages.push(`Maximum length exceeded: ${errorValue.requiredLength}.`);
            break;
          case 'pattern':
            errorMessages.push('Invalid pattern.');
            break;
          default:
            errorMessages.push(`${errorKey}: ${JSON.stringify(errorValue)}`);
            break;
        }
      });

      // Add a toast for each error message
      errorMessages.forEach((message) => {
        this.toasterService.addToast('Form is invalid', 'error', message);
      });
    }
  }

  /**
   * Emits form submission event with mode and entity data.
   */
  private emitFormSubmission(mode: FormMode, entity: T | null): void {
    const submission: FormSubmission<T> = {
      mode: mode,
      entity: entity,
      changed: this.entityForm.touched,
    };
    this.formSubmitted.emit(submission);
  }

  /**
   * Enables form editing.
   */
  onEdit(): void {
    this.entityForm.enable();
  }

  /**
   * Clears the form.
   */
  onClear(): void {
    this.entityForm.reset();
  }

  /**
   * Emits deletion event.
   */
  onDelete(): void {
    if (this.entity) {
      this.emitFormSubmission(FormMode.DELETE, this.entity());
    }
  }

  /**
   * Emits close event.
   */
  onClose(): void {
    this.emitFormSubmission(FormMode.CLOSE, this.entity());
  }

  onCancel(): void {
    this.emitFormSubmission(FormMode.CANCEL, this.entity());
  }
}

