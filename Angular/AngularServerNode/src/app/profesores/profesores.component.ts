import { Component, OnInit } from '@angular/core';
import { ProfesService } from '../servicios/profes.service';


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
})
export class ProfesoresComponent implements OnInit {
public profesores = new Array();
  constructor(private servicioProfesores: ProfesService) {}
  ngOnInit() {
    this.profesores = this.servicioProfesores.getProfes();
  }
}
