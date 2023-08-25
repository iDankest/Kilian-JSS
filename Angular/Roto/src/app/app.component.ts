import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Roto';
  constructor(private router: Router){}
  Ir(url:string): void{
    this.router.navigate([url]);
  }
}
