import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastComponent } from '@profolio/shared-ui';
// import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [RouterModule, ToastComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'locatr';
}
