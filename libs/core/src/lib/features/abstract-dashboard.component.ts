import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, effect, inject, Injector, OnInit, signal } from '@angular/core';
import { DynamicFormService } from '@profolio/frontend/shared/ui';
import { OffcanvasService } from '@profolio/offcanvas';
import { EntityInterface, FormMode } from '@profolio/interfaces';
import { ToasterService } from '@toaster';

export interface EntityService<T extends EntityInterface> {
  getAll(): Promise<T[]>;
  create(entity: T): Promise<T>;
  read(id: string): Promise<T>;
  update(id: string, entity: T): Promise<T>;
  delete(id: string): Promise<void>;
}
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
})
export abstract class AbstractDashboardComponent<T extends EntityInterface> implements OnInit, AfterViewInit {
  protected abstract readonly service: EntityService<T>; // Specific service for each entity
  protected abstract readonly listComponent: any; // Specific list component for each entity
  protected abstract readonly formComponent: any; // Specific form component for each entity
  protected abstract readonly entityName: string; // Specific entity name for each entity

  entityList = signal<T[]>([]);
  private readonly offcanvasService = inject(OffcanvasService);
  private readonly dynamicFormService = inject(DynamicFormService);
  private readonly toasterService = inject(ToasterService);

  constructor() {
    effect(async () => {
      try {
        const mode = this.offcanvasService.mode();
        const entity = this.offcanvasService.entity() as T;
        const hasChanges = this.offcanvasService.hasChanges();
        this.handleCrudAction(mode, entity, hasChanges);
      } catch (error) {
        this.toasterService.addToast('Error updating entity', 'error', (error as any).message);
      } finally {
        this.offcanvasService.hasChanges.set(false);
      }
    }, { allowSignalWrites: true });
  }

  protected get componentInjector() {
    return Injector.create({ providers: [{ provide: AbstractDashboardComponent, useValue: this }] });
  }

  async ngOnInit() {
    this.getList();
  }

  ngAfterViewInit() {
    this.dynamicFormService.registerFormComponent(this.entityName, this.formComponent);
  }

  private async handleCrudAction(action: FormMode | null, entity: T, hasChanges: boolean) {
    switch (action) {
      case 'create':
        if (entity && hasChanges) await this.onEntityCreate(entity);
        break;
      case 'read':
        if (entity) this.onEntityRead(entity);
        break;
      case 'update':
        if (hasChanges) await this.onEntityUpdate(entity);
        break;
      case 'delete':
        if (entity && entity?.id) await this.onEntityDelete(entity as T);
        break;
      default:
        console.log('No action taken');
        break;
    }
  }

  async getList() {
    try {
      const entities = await this.service.getAll();
      this.entityList.set(entities);
    } catch (error) {
      this.toasterService.addToast('Error loading entities', 'error', (error as any).message);
    }
  }

  async onEntityDelete(entity: T) {
    if (entity['id'] !== undefined) {
      await this.service.delete(entity['id']);
      this.entityList.update((list) => list.filter((item) => item['id'] !== entity['id']));
    }
  }

  async onEntityUpdate(entity: T) {
    const updatedEntity = await this.service.update(entity['id'] as string, entity);
    this.entityList.update((list) => list.map((item) => (item['id'] === updatedEntity.id ? updatedEntity : item)));
  }

  private async onEntityCreate(entity: T) {
    const newEntity = await this.service.create(entity);
    this.entityList.update((list) => [...list, newEntity]);
  }

  onEntityRead(entity: T) {
    this.offcanvasService.open(this.entityName, entity);
  }
}