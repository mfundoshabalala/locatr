import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepotService } from '@profolio/frontend/services';
import { DepotInterface } from '@profolio/interfaces';
import { AbstractListComponent } from '../abstract-list.component';

@Component({
  selector: 'lib-depot-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './depot-list.component.html',
  styleUrl: './depot-list.component.css',
})
export class DepotListComponent extends AbstractListComponent<DepotInterface> {
  protected service = inject(DepotService);
}
