import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { IClient } from '@profolio/interfaces';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [style({ transform: 'translateX(100%)' }), animate('700ms ease-in')]),
      transition(':leave', [animate('500ms ease-out', style({ transform: 'translateX(100%)' }))]),
    ]),
  ],
})
export class ClientListComponent implements OnInit {
  clients: IClient[] = [];
  newClient: IClient = {
    name: '',
    email: '',
    phone: '',
    address: '',
    createdAt: new Date(),
    createdBy: '',
    updatedAt: new Date(),
    updatedBy: '',
  };

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  onSubmit() {
    this.clientService.createClient(this.newClient).subscribe(() => {
      this.loadClients(); // Reload clients after successful addition
      this.newClient = { name: '', email: '', phone: '', address: '' }; // Clear form fields
    });
  }

  private loadClients() {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
    });
  }

  isOpen = false;

  openOffcanvas() {
    this.isOpen = true;
    document.body.style.overflow = 'hidden'; // Disable body scrolling
  }

  closeOffcanvas() {
    this.isOpen = false;
    document.body.style.overflow = ''; // Re-enable body scrolling
  }
}
