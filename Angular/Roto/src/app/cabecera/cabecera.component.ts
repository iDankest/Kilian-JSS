import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  public logo: string = '../assets/logo.png';
  constructor(private router: Router){}
  Ir(url:string): void{
    this.router.navigate([url]);
  }
}
