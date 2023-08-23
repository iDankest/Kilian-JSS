import { Component } from '@angular/core';
import { alumnosBD } from '../Models/alumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  public alumnosAll: Array<alumnosBD>
  constructor(){
  this.alumnosAll = [
    new alumnosBD('Kilian', 'Sánchez', 10, 'ejemplo@gmail.com', '999099099', 'imagen', true),
    new alumnosBD('Paco', 'Ramirez', 20, 'pacoramirez@gmail.com', '630770906', 'imagen', false)
  ]
}
}