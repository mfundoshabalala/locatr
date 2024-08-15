import { Directive, EventEmitter, inject, Input, Output } from '@angular/core';

import { EntityInterface } from '@profolio/interfaces';
import { ToasterService } from '@toaster';
import { AbstractService } from '../services/abstract-service.service';

@Directive()
export abstract class AbstractListComponent<T> {
  @Input() entities: T[] = [];
  @Output() entitySelected = new EventEmitter<T>();
  @Output() entityDeleted = new EventEmitter<T>();
  @Output() entityUpdated = new EventEmitter<T>();
  protected abstract service: AbstractService<T>;

  private toasterService = inject(ToasterService);

  async getList() {
    try {
      this.entities = await this.service.getAll();
    } catch (error) {
      this.toasterService.addToast('Error loading entities', 'error', (error as any).message);
    }
  }

  onEntitySelected(entity: T) {
    this.entitySelected.emit(entity);
  }

  async onEntityDeleted(entity: T) {
    try {
      const entityId = (entity as EntityInterface)?.['id'];
      if (entityId !== undefined) {
        await this.service.delete(entityId);
        this.entities = this.entities.filter((e) => e !== entity);
      }
    } catch (error) {
      this.toasterService.addToast('Error deleting entity', 'error', (error as any).message);
    }
  }

  async onEntityUpdated(entity: T) {
    try {
      const entityId = (entity as EntityInterface)?.['id'];
      if (entityId !== undefined) {
        entity = await this.service.update(entityId, entity);
        this.entities = this.entities.map((e) => (e === entity ? entity : e));
      }
    } catch (error) {
      this.toasterService.addToast('Error updating entity', 'error', (error as any).message);
    }
  }
}
