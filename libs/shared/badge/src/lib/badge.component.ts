import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="badge" [ngClass]="color">
      @if (indicator) {
        <span [ngClass]="color"></span>
      }
      {{ text }}
    </span>
  `,
  styleUrl: 'badge.component.css'
})
export class BadgeComponent {
  @Input({ required: true }) text!: string | number;
  @Input() color: 'success' | 'warning' | 'error' | 'info' | 'primary' = 'primary';
  @Input() indicator = true;
}
