import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastComponent } from '@profolio/frontend/shared/ui';
import { initFlowbite } from 'flowbite';
// import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [RouterModule, ToastComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'locatr';

  ngOnInit(): void {
    initFlowbite();
  }
}
