import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-primary-900 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Ferymar Inmobiliaria</h3>
            <p class="text-primary-100">Tu mejor opción en bienes raíces</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-3">Contacto</h4>
            <p class="text-primary-100">Teléfono: +51 985928062</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-3">Síguenos</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-primary-100 hover:text-white">Facebook</a>
              <a href="#" class="text-primary-100 hover:text-white">Instagram</a>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-3">Enlaces Rápidos</h4>
            <div class="flex flex-col space-y-2">
              <a href="/testimonios" class="text-primary-100 hover:text-white">Testimonios</a>
              <a href="/enlaces" class="text-primary-100 hover:text-white">Enlaces</a>
              <a href="/contactos" class="text-primary-100 hover:text-white">Contactos</a>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-primary-700 text-center text-primary-100">
          <p>&copy; ${new Date().getFullYear()} Ferymar Inmobiliaria. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}