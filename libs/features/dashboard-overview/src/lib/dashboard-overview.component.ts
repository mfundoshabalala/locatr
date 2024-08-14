import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartCardComponent } from '@profolio/shared/chart-card';
import { StatCardComponent } from '@profolio/shared/stat-card';

@Component({
  selector: 'lib-dashboard-overview',
  standalone: true,
  imports: [CommonModule, StatCardComponent, ChartCardComponent],
  template: `
  <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <lib-stat-card
      title="Total Users"
      [value]="1200"
      iconSrc="assets/icons/user.svg"
      color="primary">
    </lib-stat-card>

    <lib-chart-card
      chartTitle="Sales Over Time"
      [chartData]="salesChartData"
      [chartOptions]="salesChartOptions">
    </lib-chart-card>
  </section>
  `,
  styleUrl: './dashboard-overview.component.css',
})
export class DashboardOverviewComponent {
  salesChartData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Sales',
        data: [150, 200, 250, 220],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  salesChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
}
