import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ClientEntity } from '@profolio/interfaces';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  list = input.required<ClientEntity[]>({ alias: 'list' });
}
