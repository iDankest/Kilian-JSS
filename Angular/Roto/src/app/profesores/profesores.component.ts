import { Component } from '@angular/core';
import { ProfeDB } from '../models/profesores';
@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent {
public profeAll: Array<ProfeDB>
constructor(){
  this.profeAll = [
    new ProfeDB('Antonio', 'Ramirez', 'AntonRem@gmail.com', 'Ciberseguridad'),
    new ProfeDB('Antonio', 'Ramirez', 'AntonRem@gmail.com', 'Ciberseguridad'),
    new ProfeDB('Antonio', 'Ramirez', 'AntonRem@gmail.com', 'Ciberseguridad'),
  ]
}
}
