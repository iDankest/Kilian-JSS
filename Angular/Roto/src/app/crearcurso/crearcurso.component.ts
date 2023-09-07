import { Component, OnInit } from '@angular/core';
import { cursosDB } from '../models/cursos';
import { Global } from '../service/global.service';
import { save_cursoService } from '../service/curso.service';

@Component({
  selector: 'app-crearcurso',
  templateUrl: './crearcurso.component.html',
  styleUrls: ['./crearcurso.component.css'],
  providers: [save_cursoService]
})
export class CrearcursoComponent implements OnInit{
  public title: string;
  public curso: cursosDB;
  public save_curso: any;
  public status: any;
  public result: any;

  constructor(private _cursoService: save_cursoService){
    this.result = null
    this.title = 'Crear Curso'
    this.curso = new cursosDB('','','','',6,'','')
  }
  ngOnInit() {
    
  }
  onSubmit(form:{reset:()=> void}){
    this._cursoService.saveCurso(this.curso).subscribe(
      response =>{
        if(response.curso){
          this.save_curso = this.result.curso
          this.status= 'success'
          form.reset()
        }else{
          this.status= 'failed'
        }
      }
    )
  }

}
