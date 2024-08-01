import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { ClientEntity } from '@profolio/interfaces';
import { OffcanvasService } from '../../services';
import { OffcanvasComponent } from "../offcanvas/offcanvas.component";

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, OffcanvasComponent],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css',
})
export class ClientListComponent {
  edit = output<ClientEntity>({ alias: 'onEdit' });
  delete = output<ClientEntity>({ alias: 'onDelete' });
  list = input.required<ClientEntity[]>({ alias: 'list' });

  private readonly offcanvasService = inject(OffcanvasService);

  onDelete(client: ClientEntity) {
    this.delete.emit(client);
  }

  onEdit(client: ClientEntity) {
    this.offcanvasService.open('client', client);
  }
}
