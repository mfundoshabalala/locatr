import { Injectable, signal } from '@angular/core';
import { EntityInterface, FormMode } from '@profolio/interfaces';

@Injectable({
  providedIn: 'root',
})
export class OffcanvasService {
  entityName = signal<string>('');
  entityID = signal<string | null>(null);
  entity = signal<EntityInterface | null>(null);
  mode = signal<FormMode | null>(null);
  hasChanges = signal<boolean>(false);
  private openOffcanvas = signal<boolean>(false);

  isOpen(): boolean {
    return this.openOffcanvas();
  }

  close(): void {
    this.openOffcanvas.set(false);
  }

  open(entityName: string, entity: EntityInterface | null = null): void {
    this.entityName.set(entityName);
    if (entity) {
      this.mode.set(FormMode.UPDATE);
      this.entity.set(entity);
      this.entityID.set(entity['id']);
    } else {
      this.mode.set(FormMode.CREATE);
      this.entity.set(null);
      this.entityID.set(null);
    }
    this.openOffcanvas.set(true);
  }
}
