import { Component } from '@angular/core';
import { alumnosDB } from '../models/alumnos';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
public alumnosAll: Array<alumnosDB>
constructor(){
  this.alumnosAll= [
    new alumnosDB('Kilian', 'Sanchez'),
    new alumnosDB('Kilian', 'Sanchez'),
    new alumnosDB('Kilian', 'Sanchez'),
  ]
}
}
