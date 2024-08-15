import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepotInterface } from '@profolio/interfaces';
import { AbstractListComponent } from '@profolio/core';
import { DepotService } from '../../services/depot.service';
import { BadgeComponent } from '@profolio/shared/badge';

@Component({
  selector: 'lib-depot-list',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './depot-list.component.html',
  styleUrl: './depot-list.component.css',
})
export class DepotListComponent extends AbstractListComponent<DepotInterface> {
  protected service = inject(DepotService);
}
