import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-route-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-manager.component.html',
  styleUrl: './route-manager.component.css',
})
export class RouteManagerComponent {
  optimizeRoutes() {
    console.log('Optimizing routes...');
  }
}
