import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Roto';
  public logo: string = '../assets/logo.png';
  // public accimg: string;
  constructor(private router: Router){}
  Ir(url:string): void{
    this.router.navigate([url]);
  }
 
}
