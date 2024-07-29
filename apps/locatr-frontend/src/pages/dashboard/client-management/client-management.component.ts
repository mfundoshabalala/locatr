import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientEntity } from '@profolio/interfaces';
import { ClientService } from '../../../services/client.service';
import { ClientListComponent } from '../../../components/client-list/client-list.component';

@Component({
  selector: 'app-client-management',
  standalone: true,
  imports: [CommonModule, ClientListComponent],
  template: `<app-client-list [list]="clientList()"></app-client-list>`,
  styleUrl: './client-management.component.css',
})
export class ClientManagementComponent {
  clientList = signal<ClientEntity[]>([]);

  private readonly clientService = inject(ClientService);

  constructor() {
    this.clientList = this.clientService.clientList;
  }
}
