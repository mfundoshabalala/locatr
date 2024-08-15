import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-toggle-switch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <input type="checkbox" class="border rounded-sm" [checked]="checked" [disabled]="disabled" />
  `,
})
export class ToggleSwitchComponent {
  @Input() checked = false;
  @Input() disabled = false;

  toggleChecked() {
    this.checked = !this.checked;
  }
}
