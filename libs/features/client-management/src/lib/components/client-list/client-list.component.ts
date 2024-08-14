import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientInterface } from '@profolio/interfaces';
import { AbstractListComponent } from '@profolio/core';
import { ClientService } from '../../services/client.service';

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
