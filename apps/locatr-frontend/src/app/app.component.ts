import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToastComponent } from '@profolio/frontend/shared/ui';
import { LoaderComponent } from "../components/loader/loader.component";

@Component({
  standalone: true,
  imports: [RouterModule, ToastComponent, LoaderComponent],
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <lib-toast></lib-toast>
    <app-loader></app-loader>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
