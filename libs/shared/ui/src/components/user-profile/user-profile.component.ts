import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  isHidden = true;
  @Input() image = '';

  toggleDropdown = (event: Event) => {
    event.preventDefault();
    this.isHidden = !this.isHidden;
  }
}
