import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div class="card w-full max-w-md">
        <h2 class="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
        
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              formControlName="email"
              class="input-field"
              placeholder="correo@ejemplo.com"
            >
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              id="password"
              type="password"
              formControlName="password"
              class="input-field"
              placeholder="••••••••"
            >
          </div>

          @if (error) {
            <p class="text-red-500 text-sm">{{ error }}</p>
          }

          <button
            type="submit"
            class="btn-primary w-full"
            [disabled]="loginForm.invalid || loading"
          >
            @if (loading) {
              <span>Cargando...</span>
            } @else {
              <span>Iniciar Sesión</span>
            }
          </button>
        </form>
      </div>
    </div>
  `
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.error = null;
      
      const { email, password } = this.loginForm.value;
      
      this.authService.login(email, password).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.error = 'Credenciales inválidas';
          this.loading = false;
        }
      });
    }
  }
}