import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-gray-50">
      <app-navbar />
      <main class="container mx-auto px-4 py-8">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
})
export class AppComponent {
  title = 'Ferymar Inmobiliaria';
}