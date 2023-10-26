import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auten.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private _userService: UserService,private router: Router) {}

  ngOnInit() {}
  logout() {
    this.authService.logout();
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
  // Comprobar el estado de autenticación para decidir qué elementos mostrar
  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

}
