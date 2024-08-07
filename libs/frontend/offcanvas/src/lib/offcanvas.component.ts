import { Component, effect, inject, input, signal, viewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityInterface, FormMode, FormSubmission } from '@profolio/interfaces';
import { OffcanvasService } from '../services/offcanvas.service';
import { DynamicFormService } from '@profolio/frontend/shared/ui';

@Component({
  selector: 'lib-offcanvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.css',
})
export class OffcanvasComponent {
  formContainer = viewChild('formContainer', { read: ViewContainerRef });

  title = input<string>();
  isOpen = signal<boolean>(false);
  entityID = signal<string | null>(null);
  entityName = signal<string>('');
  entity = signal<EntityInterface | null>({});
  mode = signal<FormMode | null>(null);

  private readonly offcanvasService = inject(OffcanvasService);
  private readonly dynamicFormService = inject(DynamicFormService);

  constructor() {
    effect(() => {
      this.isOpen.set(this.offcanvasService.isOpen());
    }, { allowSignalWrites: true });

    effect(() => {
      if (this.isOpen()) this.loadForm();
    });
  }

  openOffcanvas() {
    this.offcanvasService.open(this.entityName(), this.entity()); //TODO: try and remove the parameters
  }

  closeOffcanvas() {
    this.offcanvasService.close();
  }

  loadForm() {
    this.formContainer()?.clear();
    if (!this.offcanvasService.entityName() || !this.offcanvasService.isOpen()) {
      return;
    }

    const component = this.dynamicFormService.getFormComponent(this.offcanvasService.entityName());
    if (!component) {
      return;
    }

    const componentRef = this.formContainer()?.createComponent(component);
    if (componentRef) {
      // componentRef.instance.mode = this.offcanvasService.mode;
      componentRef.instance.entity = this.offcanvasService.entity;
      // componentRef.instance.entityName = this.offcanvasService.entityName();
    }

    if (componentRef?.instance.formSubmitted) {
      componentRef.instance.formSubmitted.subscribe(({ entity, mode, changed }: FormSubmission) => {
        this.offcanvasService.mode.set(mode);
        if (mode !== FormMode.CLOSE) {
          this.offcanvasService.entity.set(entity);
          this.offcanvasService.hasChanges.set(changed);
        } else {
          this.offcanvasService.entity.set(null);
          this.offcanvasService.hasChanges.set(false);
        }
        this.offcanvasService.close();
      });
    }
  }
}
