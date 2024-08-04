import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartComponent } from '../../components/chart/chart.component';
import { StatCardComponent } from '../../components/stat-card/stat-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StatCardComponent, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  activeClientsTitle = signal('Active Clients');
  activeClientsCount = signal(120);
  clientsGrowthRate = signal(0.05);

  totalRoutesTitle = signal('Total Routes');
  totalRoutesCount = signal(1500);
  routesGrowthRate = signal(-0.02);
}
