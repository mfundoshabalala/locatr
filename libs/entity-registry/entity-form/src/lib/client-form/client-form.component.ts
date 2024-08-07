import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractFormComponent } from '../abstract-form.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-client-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css',
})
export class ClientFormComponent extends AbstractFormComponent {
  protected override createForm(): FormGroup {
    return this.fb.group({

    });
  }
}
