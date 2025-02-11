import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class NavbarComponent {
  isMenuOpen = false; // Controla se o menu está aberto ou fechado

  // Função para alternar o menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
