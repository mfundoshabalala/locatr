import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, inject, signal, OnInit } from '@angular/core';

import { ClientEntity } from '@profolio/interfaces';
import { ClientService } from '../../../services/client.service';
import { ClientListComponent } from '../../../components/client-list/client-list.component';

@Component({
  selector: 'app-client-management',
  standalone: true,
  imports: [CommonModule, ClientListComponent],
  template: `
    <app-client-list
      [list]="clientList()"
      (onDelete)="onDelete($event)"
      (onEdit)="onEdit($event)">
    </app-client-list>
  `,
  styleUrl: './client-management.component.css',
})
export class ClientManagementComponent implements OnInit {
  clientList = signal<ClientEntity[]>([]);

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly clientService = inject(ClientService);

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => this.clientList.set(data['clients']));
  }

  async onDelete(client: ClientEntity) {
    console.log('Delete client', client);
    if (client.id !== undefined) {
      await this.clientService.deleteClient(client.id);
      this.clientList.update((list) => list.filter((item) => item.id !== client.id));
    }
  }

  onEdit(client: ClientEntity) {
    console.log('Edit client', client);
  }
}
