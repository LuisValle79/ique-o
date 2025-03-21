import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="bg-primary-900 text-white">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center">
              <img src="assets/logo.png" alt="Ferymar" class="h-8 w-auto">
              <span class="ml-2 text-xl font-bold">Ferymar</span>
            </a>
          </div>
          
          <div class="flex items-center space-x-4">
            <a routerLink="/projects" class="hover:text-primary-200">Proyectos</a>
            <a routerLink="/advisors" class="hover:text-primary-200">Asesores</a>
            @if (isLoggedIn()) {
              @if (isAdmin()) {
                <a routerLink="/admin" class="hover:text-primary-200">Panel Admin</a>
              }
              <button (click)="logout()" class="hover:text-primary-200">Cerrar Sesión</button>
            } @else {
              <a routerLink="/auth/login" class="hover:text-primary-200">Iniciar Sesión</a>
            }
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn() {
    return this.authService.isAuthenticated();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  logout() {
    this.authService.logout();
  }
}