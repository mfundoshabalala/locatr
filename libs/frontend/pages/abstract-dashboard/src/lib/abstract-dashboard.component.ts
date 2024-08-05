import { CommonModule } from '@angular/common';
import { Component, effect, inject, Injector, OnInit, signal } from '@angular/core';
import { DynamicFormService } from '@profolio/frontend/shared/ui';
import { OffcanvasService } from '@profolio/offcanvas';

type EntityInterface = Record<string, any>;

@Component({
  selector: 'lib-abstract-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (listComponent) {
    <ng-container>
      <ng-container *ngComponentOutlet="listComponent; injector: componentInjector"></ng-container>
    </ng-container>
    }
  `,
  styleUrl: './abstract-dashboard.component.css',
})
export abstract class AbstractDashboardComponent<T extends EntityInterface> implements OnInit {
  protected abstract readonly service: any; // Specific service for each entity
  protected abstract readonly listComponent: any; // Specific list component for each entity
  protected abstract readonly formComponent: any; // Specific form component for each entity

  entityList = signal<T[]>([]);
  private readonly offcanvasService = inject(OffcanvasService);
  private readonly dynamicFormService = inject(DynamicFormService);

  constructor() {
    effect(
      async () => {
        try {
          if (this.offcanvasService.mode() === 'update' && this.offcanvasService.hasChanges()) {
            await this.onUpdate(this.offcanvasService.entity() as T);
          } else if (this.offcanvasService.mode() === 'create' && this.offcanvasService.entity()) {
            await this.onCreate(this.offcanvasService.entity() as T);
          } else if (this.offcanvasService.mode() === 'delete' && this.offcanvasService.entity()?.['id']) {
            await this.onDelete(this.offcanvasService.entity() as T);
          } else {
            console.log('No action taken');
          }
        } catch (error: any) {
          console.log(error.message);
        } finally {
          this.offcanvasService.hasChanges.set(false);
        }
      },
      { allowSignalWrites: true }
    );
  }

  protected get componentInjector() {
    return Injector.create({ providers: [{ provide: AbstractDashboardComponent, useValue: this }] });
  }

  ngOnInit() {
    this.dynamicFormService.registerFormComponent(this.formComponent.name, this.formComponent);
    this.service.getAll().then((list: T[]) => this.entityList.set(list));
  }

  onEdit(entity: T) {
    this.offcanvasService.open(this.formComponent.name, entity);
  }

  async onDelete(entity: T) {
    if (entity['id'] !== undefined) {
      await this.service.delete(entity['id']);
      this.entityList.update((list) => list.filter((item) => item['id'] !== entity['id']));
    }
  }

  private async onUpdate(entity: T) {
    const updatedEntity = await this.service.update(entity['id'] as string, entity);
    this.entityList.update((list) => list.map((item) => (item['id'] === updatedEntity.id ? updatedEntity : item)));
  }

  private async onCreate(entity: T) {
    const newEntity = await this.service.create(entity);
    this.entityList.update((list) => [...list, newEntity]);
  }
}
