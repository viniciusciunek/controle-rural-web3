import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})

export class NavbarComponent {
  isMenuOpen = false;
  user = localStorage.getItem('user');

  constructor(private authService: AuthService, private router: Router) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  async logout() {
    await this.authService.logout()

    this.router.navigate(['login']);
  }
}
