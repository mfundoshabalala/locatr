import { Directive, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { AbstractService } from '@profolio/core';
import { EntityInterface } from '@profolio/interfaces';
import { ToasterService } from '@toaster';

@Directive()
export abstract class AbstractListComponent<T> implements OnInit {
  @Input() entities: T[] = [];
  @Output() entitySelected = new EventEmitter<T>();
  @Output() entityDeleted = new EventEmitter<T>();
  @Output() entityUpdated = new EventEmitter<T>();
  protected abstract service: AbstractService<T>;

  private toasterService = inject(ToasterService);

  async ngOnInit() {
    await this.getList();
  }

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
      await this.service.delete((entity as EntityInterface)?.['id']);
      this.entities = this.entities.filter((e) => e !== entity);
    } catch (error) {
      this.toasterService.addToast('Error deleting entity', 'error', (error as any).message);
    }
  }

  async onEntityUpdated(entity: T) {
    try {
      entity = await this.service.update((entity as EntityInterface)?.['id'], entity);
      this.entities = this.entities.map((e) => (e === entity ? entity : e));
    } catch (error) {
      this.toasterService.addToast('Error updating entity', 'error', (error as any).message);
    }
  }
}
