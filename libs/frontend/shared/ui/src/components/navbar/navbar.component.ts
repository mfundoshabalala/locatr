import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navBarItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About us',
      href: '/about-us',
    },
    {
      name: 'Services',
      href: '/services',
    },
    {
      name: 'Contact us',
      href: 'contact-us',
    },
  ];
}
