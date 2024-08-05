import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TripInterface } from '@profolio/interfaces';



@Component({
  selector: 'lib-trip-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-list.component.html',
  styleUrl: './trip-list.component.css',
})
export class TripListComponent {
  edit = output<TripInterface>({ alias: 'onEdit' });
  delete = output<TripInterface>({ alias: 'onDelete' });
  update = output<TripInterface>({ alias: 'onUpdate' });
  trips = input.required<TripInterface[]>({ alias: 'list' });

  onDelete(trip: TripInterface) {
    this.delete.emit(trip);
  }

  onEdit(trip: TripInterface) {
    this.edit.emit(trip);
  }

  onUpdate(trip: TripInterface) {
    this.update.emit(trip);
  }
}
