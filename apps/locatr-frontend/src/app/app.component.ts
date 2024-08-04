import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastComponent } from '@profolio/frontend/shared/ui';
import { LoaderComponent } from '../components';
import { OffcanvasComponent } from '../components';

@Component({
  standalone: true,
  imports: [RouterModule, ToastComponent, LoaderComponent, OffcanvasComponent],
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <lib-toast></lib-toast>
    <app-loader></app-loader>
    <app-offcanvas></app-offcanvas> 
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
