import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader">
      <h1>Please wait...</h1>
    </div>
  `,
  styleUrl: './loader.component.css',
})
export class LoaderComponent {}
