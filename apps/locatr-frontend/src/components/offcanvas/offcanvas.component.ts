import { Component, ViewContainerRef, OnInit, OnChanges, inject, input, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormService } from '../../services/dynamic-form.service';

export interface Entity {
  id: number;
  name: string;
  type: string; // Use this field to distinguish between entity types
}

@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css'],
})
export class OffcanvasComponent implements OnInit, OnChanges {
  formContainer = viewChild('formContainer', { read: ViewContainerRef });

  title = input.required<string>();
  entityName = input.required<string>();
  isOpen = false;

  private readonly dynamicFormService = inject(DynamicFormService);

  ngOnInit() {
    this.loadForm();
  }

  ngOnChanges() {
    this.loadForm();
  }

  openOffcanvas() {
    this.isOpen = true;
  }

  closeOffcanvas() {
    this.isOpen = false;
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
    }

    if (componentRef?.instance.formSubmitted) {
      componentRef.instance.formSubmitted.subscribe(() => {
        this.closeOffcanvas();
      });
    }
  }
}
