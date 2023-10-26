import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auten.service';
import { AuthGuard } from 'src/app/utils/auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  logout() {
    this.authService.logout();
  }
  // Comprobar el estado de autenticación para decidir qué elementos mostrar
  isLoggedIn() {
    return this.authService.isLoggedIn;
  }
}
