import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractListComponent } from '../abstract-list.component';
import { ClientInterface } from '@profolio/interfaces';
import { ClientService } from '@profolio/frontend/services';

@Component({
  selector: 'lib-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css',
})
export class ClientListComponent extends AbstractListComponent<ClientInterface> {
  protected override service = inject(ClientService);
}
