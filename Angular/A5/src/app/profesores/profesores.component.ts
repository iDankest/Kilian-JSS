import { Component } from '@angular/core';
import { profeBD } from '../Models/profesores';
@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['../app.component.css']
})
export class ProfesoresComponent {
  public profeAll: Array<profeBD>
  constructor(){
    this.profeAll=[
      new profeBD('Juan', 'Perez', 'JuanP@gmail.com', 'Ciencia'),
      new profeBD('Jacinto', 'Suarez', 'JacintoS@gmail.com', 'Informatica')
    ]
  }
}
