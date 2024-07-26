import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentHeaderComponent } from '../../components';



@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentHeaderComponent],
  template: `
    <app-content-header />
    <section class="flex-1 p-2 bg-white border rounded-md shadow-sm">
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrl: './dashboard-content.component.css',
})
export class DashboardContentComponent {}
