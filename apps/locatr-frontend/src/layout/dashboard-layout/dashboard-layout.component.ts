import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardHeaderComponent } from "../dashboard-header/dashboard-header.component";
import { DashboardSidebarComponent } from "../dashboard-sidebar/dashboard-sidebar.component";
import { DashboardContentComponent } from "../dashboard-content/dashboard-content.component";
import { DashboardFooterComponent } from "../dashboard-footer/dashboard-footer.component";

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    DashboardContentComponent,
    DashboardFooterComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
  ],
  template: `
    <section class="dashboard-layout">
      <app-dashboard-header />
      <main class="flex flex-1 gap-x-4 bg-slate-100">
        <app-dashboard-sidebar />
        <app-dashboard-content class="flex flex-col flex-1 p-2 border rounded-md shadow-sm gap-y-4 bg-slate-100 overflow-x-auto" />
      </main>
      <app-dashboard-footer />
    </section>
  `,
  styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent {}
