import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

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
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  list = input.required<ClientEntity[]>({ alias: 'list' });
}
