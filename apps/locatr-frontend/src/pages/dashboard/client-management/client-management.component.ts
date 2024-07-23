import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientService } from '../../../services/client.service';
import { ClientListComponent } from '../../../components/client-list/client-list.component';

interface ClientEntity {
  clientID?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
}

@Component({
  selector: 'app-client-management',
  standalone: true,
  imports: [CommonModule, ClientListComponent],
  template: `<app-client-list [list]="clientList"></app-client-list>`,
  styleUrl: './client-management.component.css',
})
export class ClientManagementComponent {
  clientList: ClientEntity[] = [];

  private readonly clientService = inject(ClientService);

  constructor () {
    this.loadData();
  }
  async loadData(): Promise<void> {
    this.clientList = await this.clientService.getClientList();
  }
}
