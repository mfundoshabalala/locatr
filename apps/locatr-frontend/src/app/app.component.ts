import { Component, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '../components';
import { OffcanvasComponent } from '@profolio/offcanvas';
import { ToasterComponent } from '@toaster';
import { LoadingService } from '@profolio/core';


@Component({
  standalone: true,
  imports: [RouterModule, ToasterComponent, LoaderComponent, OffcanvasComponent],
  selector: 'app-root',
  template: `
    @if (loading) {
    <div class="loading-container flex-content-center">
      <app-loader></app-loader>
    </div>
    }
    <router-outlet></router-outlet>
    <lib-toaster></lib-toaster>
    <lib-offcanvas></lib-offcanvas>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  loading = false;
  private _loading = inject(LoadingService);

  constructor() {
    effect(() => {
      this.loading = this._loading.loading;
    });
  }
}
