import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {
  brand = 'Locatr';
  errorMessage = 'An unexpected error occurred.';

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      if (data?.['errorMessage']) {
        this.errorMessage = data['errorMessage'];
      }
    });
  }
}
