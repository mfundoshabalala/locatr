import * as _ from 'lodash';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, OnChanges, signal, computed } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  OrderType,
  OrderStatus,
  OrderPriority,
  ClientInterface,
  OrderInterface,
  DepotInterface,
} from '@profolio/interfaces';
import { AbstractFormComponent } from '../abstract-form.component';
import { ClientService, DepotService } from '@profolio/frontend/services';
import { BasicInputComponent, DropDownComponent, FormButtonsComponent } from '@profolio/frontend/shared/ui';

@Component({
  selector: 'lib-order-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormButtonsComponent, DropDownComponent, BasicInputComponent],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent extends AbstractFormComponent<OrderInterface> implements OnInit, OnChanges {
  private depotService = inject(DepotService);
  private clientService = inject(ClientService);

  orderTypes = Object.values(OrderType);
  orderStatuses = Object.values(OrderStatus);
  orderPriorities = Object.values(OrderPriority);

  selectedClientID = signal<string | null>(null);
  clients = signal<ClientInterface[]>([], { equal: _.isEqual });
  depots = signal<DepotInterface[]>([], { equal: _.isEqual });
  sites = computed(() => {
    if (!this.selectedClientID()) return [];
    const selectedClient:ClientInterface | undefined = this.clients().find((client) => client.id === this.selectedClientID());
    return selectedClient ? [selectedClient.site] : [];
  });

  override ngOnInit(): void {
    super.ngOnInit();
    this.loadClients();
    this.loadDepot();

    this.entityForm.get('customer')?.valueChanges.subscribe((value) => {
      this.selectedClientID.set(value);
    });
  }

  protected override createForm(): FormGroup {
    return this.fb.group({
      orderNumber: ['', Validators.required],
      customer: ['', Validators.required],
      depot: ['', Validators.required],
      site: ['', Validators.required],
      type: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required]
    });
  }

  private loadClients(): void {
    this.clientService.getAll().then((clients) => this.clients.set(clients));
  }

  private loadDepot(): void {
    this.depotService.getAll().then((depots) => this.depots.set(depots));
  }
}
