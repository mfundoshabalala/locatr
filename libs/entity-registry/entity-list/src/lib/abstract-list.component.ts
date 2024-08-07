import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractService } from '@profolio/frontend/services';

@Directive()
export abstract class AbstractListComponent<T> implements OnInit {
  @Input() entities: T[] = [];
  @Output() entitySelected = new EventEmitter<T>();
  @Output() entityDeleted = new EventEmitter<T>();
  @Output() entityUpdated = new EventEmitter<T>();
  protected abstract service: AbstractService<T>;

  async ngOnInit() {
    await this.getList();
  }

  async getList() {
    try {
      this.entities = await this.service.getAll();
    } catch (error) {
      console.error('Error loading entities', error);
    }
  }

  onEntitySelected(entity: T) {
    this.entitySelected.emit(entity);
  }

  async onEntityDeleted(entity: T) {
    try {
      await this.service.delete((entity as any).id);
      await this.getList();
    } catch (error) {
      console.error('Error deleting entity', error);
    }
  }

  async onEntityUpdated(entity: T) {
    try {
      await this.service.update((entity as any).id, entity);
      await this.getList(); //FIXME: This is not efficient
    } catch (error) {
      console.error('Error updating entity', error);
    }
  }
}
