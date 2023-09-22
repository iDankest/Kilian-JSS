import { Component, OnInit, Inject} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GcursoService } from '../servicios/gcurso.service';
import { GCurso } from '../Models/gcurso';
import {Dialog, DIALOG_DATA} from '@angular/cdk/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit{

  listCursos: GCurso[] = []
  // toastr: any;

constructor(private _gcursoService: GcursoService,
            private toastr: ToastrService ,
            public dialog: Dialog){
           
}
openDialog() {
  this.dialog.open(CdkDialogDataExampleDialog, {
    minWidth: '300px',
    data: {
      animal: 'panda',
    },
  });
}

  ngOnInit(): void{
this.obtenerCursos()
  }
  obtenerCursos() {
    this._gcursoService.getCursos().subscribe(data => {
      console.log(data);
      this.listCursos = data;
    }, error => {
      console.log(error);
    })
  }
  eliminarCurso(id: any) {
    this._gcursoService.eliminarCurso(id).subscribe(data => {
      this.toastr.error('El curso fue eliminado con exito' ,'Curso Eliminado');
      this.obtenerCursos();
    }, error => {
      console.log(error);
    })
  }


}
@Component({
  selector: 'cdk-dialog-data-example-dialog',
  templateUrl: '../curso/curso.component.html',
  styleUrls: ['../curso/curso.component.css'],
})
export class CdkDialogDataExampleDialog {
  constructor(@Inject(DIALOG_DATA) public data: DialogData) {}
}


