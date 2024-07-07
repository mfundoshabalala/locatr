import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, LogoComponent, NavbarComponent, UserProfileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
