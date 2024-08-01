import { Component, ViewContainerRef, OnInit, OnChanges, inject, input, viewChild, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffcanvasService } from '../../services';
import { DynamicFormService } from '../../services/dynamic-form.service';


@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css'],
})
export class OffcanvasComponent {
  formContainer = viewChild('formContainer', { read: ViewContainerRef });

  title = input<string>();
  entityName = signal<string>('');
  isOpen = signal<boolean>(false);
  entity = signal<Record<string, any>>({});

  private readonly offcanvas = inject(OffcanvasService);
  private readonly dynamicFormService = inject(DynamicFormService);

  constructor() {
    effect(() => {
      this.isOpen.set(this.offcanvas.isOpen());
      console.log('Offcanvas open:', this.isOpen());
    }, { allowSignalWrites: true });

    effect(() => {
      this.entity.set(this.offcanvas.entity());
      console.log('Entity:', this.entity());
    }, { allowSignalWrites: true });

    effect(() => {
      this.entityName.set(this.offcanvas.entityName());
      console.log('Entity name:', this.entityName());
      this.loadForm();
    }, { allowSignalWrites: true });
  }

  openOffcanvas() {
    this.offcanvas.open(this.entityName(), this.entity());
  }

  closeOffcanvas() {
    this.offcanvas.close();
  }

  loadForm() {
    this.formContainer()?.clear();
    if (!this.entityName()) {
      return;
    }

    const component = this.dynamicFormService.getFormComponent(this.entityName());
    if (!component) {
      return;
    }

    const componentRef = this.formContainer()?.createComponent(component);
    if (componentRef) {
      componentRef.instance.entityName = this.entityName();
      componentRef.instance.entity = this.entity();
    }

    if (componentRef?.instance.formSubmitted) {
      componentRef.instance.formSubmitted.subscribe(() => {
        this.closeOffcanvas();
      });
    }
  }
}
