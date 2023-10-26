import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false; // Inicialmente el usuario no está autenticado

  login() {
    // Lógica para iniciar sesión
    this.isLoggedIn = true;
  }

  logout() {
    // Lógica para cerrar sesión
    this.isLoggedIn = false;
  }
}
