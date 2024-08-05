import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { AbstractDashboardComponent } from "@pages/abstract-dashboard";
import { ClientInterface } from "@profolio/interfaces";
import { ClientFormComponent } from "../components/client-form/client-form.component";
import { ClientListComponent } from "../components/client-list/client-list.component";
import { ClientService } from "@profolio/frontend/services";

@Component({
  selector: 'lib-client-management',
  standalone: true,
  imports: [CommonModule, ClientListComponent],
  template: `
    <lib-client-list
      [list]="entityList()"
      (onEdit)="onEdit($event)"
      (onDelete)="onDelete($event)">
    </lib-client-list>
  `,
  styleUrl: './client-management.component.css',
})
export class ClientManagementComponent extends AbstractDashboardComponent<ClientInterface> {
  protected readonly service = inject(ClientService);
  protected readonly listComponent = ClientListComponent;
  protected readonly formComponent = ClientFormComponent;
}
