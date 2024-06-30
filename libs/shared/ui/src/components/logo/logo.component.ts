import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1 class="font-serif text-2xl font-black cursor-pointer">
    <a href="/">Locatr</a>
  </h1>
  `,
})
export class LogoComponent {}
