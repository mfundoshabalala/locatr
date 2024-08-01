import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OffcanvasService {
  private readonly openOffcanvas = signal<boolean>(false);
  readonly entity = signal<Record<string, any>>({});
  readonly entityName = signal<string>('');

  isOpen(): boolean {
    return this.openOffcanvas();
  }

  close(): void {
    this.openOffcanvas.set(false);
  }

  open(entityName: string, entity?: Record<string, any>): void {
    if (entity) this.entity.set(entity);
    this.entityName.set(entityName);
    this.openOffcanvas.set(true);
  }
}
