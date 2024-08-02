import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { ClientInterface } from '@profolio/interfaces';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css',
})
export class ClientListComponent {
  edit = output<ClientInterface>({ alias: 'onEdit' });
  delete = output<ClientInterface>({ alias: 'onDelete' });
  update = output<ClientInterface>({ alias: 'onUpdate' });
  list = input.required<ClientInterface[]>({ alias: 'list' });

  onDelete(client: ClientInterface) {
    this.delete.emit(client);
  }

  onEdit(client: ClientInterface) {
    this.edit.emit(client);
  }

  onUpdate(client: ClientInterface) {
    this.update.emit(client);
  }
}
