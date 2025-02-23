import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  loggedIn = false;

  constructor(private authService: AuthService) {
    this.loggedIn = this.authService.isLoggedIn();
  }

  title = 'controle-rural';
}
