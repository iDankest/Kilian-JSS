import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/service/error.service';
import { UserService } from 'src/app/service/user.service-copy';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;
  

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  addUser() {

    // Validamos que el usuario ingrese valores
    if (this.email == '' || this.password == '' || this.confirmPassword == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    // Validamos que las password sean iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error('Las passwords ingresadas son distintas', 'Error');
      return;
    }

    // Creamos el objeto
    const user: User = {
      email: this.email,
      password: this.password
    }

    this.loading = true;
    this._userService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.email} fue registrado con exito`, 'Usuario registrado');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }
}
