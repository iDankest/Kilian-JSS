import { Component, OnInit } from '@angular/core';
import { ProfesService } from '../servicios/profes.service';

@Component({
selector: 'app-profesores',
templateUrl: './profesores.component.html',
styleUrls: ['./profesores.component.css'],
})
export class ProfesoresComponent implements OnInit {
public profesores = new Array();
selectedProfesor: any;

constructor(private servicioProfesores: ProfesService) {}
ngOnInit() {
this.profesores = this.servicioProfesores.getProfes();
}
cdkSelectedChange(event: any) {
const selectedOption = event.source.selectedOptions.selected[0]; // Obtén el elemento seleccionado
if (selectedOption) {
const selectedProfesorId = selectedOption.value; // Obtén el valor del _id
this.selectedProfesor = this.profesores.find((profesor) => profesor._id === selectedProfesorId);
console.log('Profesor seleccionado:', this.selectedProfesor);
}
}
ngAfterViewChecked() {
if (this.selectedProfesor && this.selectedProfesor.nameP) {
// La información del profesor se mostrará aquí
}
}
}