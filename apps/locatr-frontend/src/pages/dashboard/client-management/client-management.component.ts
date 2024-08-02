import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, inject, signal, OnInit, effect } from '@angular/core';

import { ClientEntity } from '@profolio/interfaces';
import { ClientService } from '../../../services/client.service';
import { OffcanvasService } from '../../../services/offcanvas.service';
import { ClientListComponent } from '../../../components/client-list/client-list.component';

@Component({
  selector: 'app-client-management',
  standalone: true,
  imports: [CommonModule, ClientListComponent],
  template: `
    <app-client-list
      [list]="clientList()"
      (onEdit)="onEdit($event)"
      (onDelete)="onDelete($event)"> <!-- FIXME: move these out of the template and use ofcanvas instead -->
     </app-client-list>
  `,
  styleUrl: './client-management.component.css',
})
export class ClientManagementComponent implements OnInit {
  clientList = signal<ClientEntity[]>([]);

  private readonly clientService = inject(ClientService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly offcanvasService = inject(OffcanvasService);

  constructor() {
    effect(async () => {
      try {
        if (this.offcanvasService.mode() === 'update' && this.offcanvasService.hasChanges()) {
          await this.onUpdate(this.offcanvasService.entity() as ClientEntity);
        } else if (this.offcanvasService.mode() === 'create' && this.offcanvasService.entity()) {
          await this.onCreate(this.offcanvasService.entity() as ClientEntity);
        } else if (this.offcanvasService.mode() === 'delete' && this.offcanvasService.entity()?.['id']) {
          await this.onDelete(this.offcanvasService.entity() as ClientEntity);
        } else {
          console.log("No action taken");
        }
      } catch (error:any) {
        console.log(error.message)
      } finally {
        // this.offcanvasService.entityName.set('');
        // this.offcanvasService.entity.set(null);
        // this.offcanvasService.mode.set(null);
        this.offcanvasService.hasChanges.set(false);
      }
    }, { allowSignalWrites: true });
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => this.clientList.set(data['clients']));
  }

  onEdit(client: ClientEntity) {
    this.offcanvasService.open('client', client);
  }

  async onDelete(client: ClientEntity) {
    if (client.id !== undefined) {
      await this.clientService.deleteClient(client.id);
      this.clientList.update((list) => list.filter((item) => item.id !== client.id));
    }
  }

  private async onUpdate(client: ClientEntity) {
    const entity = await this.clientService.updateClient(client?.id as string, client);
    this.clientList.update((list) => list.map((item) => (item.id === entity.id ? entity : item)));
  }

  private async onCreate(client: ClientEntity) {
    const entity = await this.clientService.createClient(client);
    this.clientList.update((list) => [...list, entity]);
  }
}
