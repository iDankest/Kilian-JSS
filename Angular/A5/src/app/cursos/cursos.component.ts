import { Component, OnInit } from '@angular/core';
import { profesorBase } from '../Models/alumnos';
import { alumnosBD } from '../Models/alumnos';
import { cursosBD } from '../Models/cursos';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  public alumnosAll: Array<alumnosBD>
  public nombreProfesor: string
  public fotoProfesor: string
  public nombre: string
  public listado: string
  public imagen: string
  public notaAlumno: number
  public registrado: boolean
  public Nota: number
  public cursosA:Array<cursosBD>
  constructor(){
    this.cursosA=[
      new cursosBD('HTML','Mañana', 420, true, '../assets/html.png'),
      new cursosBD('CSS','Tarde', 420, true, './assets/css.png'),
      new cursosBD('JavaScript','Tarde', 420, true, './assets/javascript.jpg'),
      new cursosBD('Python','Mañana', 420, true, './assets/python.png'),
    ]
    this.Nota = 0
    this.registrado=false
    this.notaAlumno=4
    this.nombreProfesor = profesorBase.nombre
    this.fotoProfesor = profesorBase.foto
    this.nombre = "Programacion"
    this.listado = "Listado de cursos"
    this.imagen="https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page"
  
    this.alumnosAll =[
      new alumnosBD("Miguel", "Ramírez", 39, "miguel@gmail.com", "123456789", "./assets/media/fotommp.jpg", true),
      new alumnosBD("Javier", "Díaz", 19, "javier@gmail.com", "123456789", "./assets/media/fotommp.jpg", false)
      ]
  }
  ngOnInit(){
    console.log("OnInit Ejecutando")
    console.log(this.alumnosAll)
  }
  cambiarTitulo(){
    this.nombre= "Programacion en angular"
  }
  setRegistrado(){
    this.registrado = true
  }
  unsetRegistrado(){
    this.registrado = false
  }
  aumentarNota() {
    this.Nota += 5;
  }
}
