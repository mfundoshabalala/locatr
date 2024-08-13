import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '../components';
import { OffcanvasComponent } from '@profolio/offcanvas';
import { ToasterComponent } from '@toaster';


@Component({
  standalone: true,
  imports: [RouterModule, ToasterComponent, LoaderComponent, OffcanvasComponent],
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <lib-toaster></lib-toaster>
    <app-loader></app-loader>
    <lib-offcanvas></lib-offcanvas>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
