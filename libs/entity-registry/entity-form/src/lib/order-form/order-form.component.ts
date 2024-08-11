import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { OrderType, OrderStatus, OrderPriority, ClientInterface, OrderInterface } from "@profolio/interfaces";
import { AbstractFormComponent } from "../abstract-form.component";
import { ClientService } from "@profolio/frontend/services";
import { BasicInputComponent, DropDownComponent, FormButtonsComponent } from "@profolio/frontend/shared/ui";

@Component({
  selector: 'lib-order-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormButtonsComponent, DropDownComponent, BasicInputComponent],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent extends AbstractFormComponent<OrderInterface> implements OnInit {
  orderTypes = Object.values(OrderType);
  orderStatuses = Object.values(OrderStatus);
  orderPriorities = Object.values(OrderPriority);
  clients: ClientInterface[] = [];

  private clientService = inject(ClientService);

  override ngOnInit(): void {
    super.ngOnInit();
    this.loadClients();
  }

  protected override createForm(): FormGroup {
    return this.fb.group({
      orderNumber: ['', [Validators.required]],
      client: ['', [Validators.required]],
      pickupAddress: ['', [Validators.required]],
      deliveryAddress: ['', [Validators.required]],
      type: ['', [Validators.required]],
      status: ['', [Validators.required]],
      priority: ['', [Validators.required]],
    });
  }

  private loadClients(): void {
    this.clientService.getAll().then((clients) => (this.clients = clients));
  }
}
