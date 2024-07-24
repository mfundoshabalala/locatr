import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (loading) {
    <div class="loader">
      <h1>Please wait...</h1>
    </div>
    }
  `,
  styleUrl: './loader.component.css',
})
export class LoaderComponent {
  private readonly loader = inject(LoaderService);
  loading = false;

  constructor() {
    effect(() => {
      this.loading = this.loader.loading();
    });
  }
}
