import { Component, OnInit} from '@angular/core';
import { GRegistroService } from '../servicios/gregistro.service';
import { Registrad } from '../Models/registro';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-lista-registro',
  templateUrl: './lista-registro.component.html',
  styleUrls: ['./lista-registro.component.css']
})
export class ListaRegistroComponent implements OnInit{
  listRegistrad: Registrad[]=[];

  constructor(private _registroService: GRegistroService, private toastr: ToastrService){

  }
  ngOnInit(): void {
    this.getRegistros()
  }
  getRegistros(){
    this._registroService.getRegistros().subscribe(data => {
      console.log(data);
      this.listRegistrad = data;
    }, error => {
      console.log(error);
    })
  }
  eliminarRegistro(id: any) {
    this._registroService.eliminarRegistro(id).subscribe(data => {
      this.toastr.error('El registro fue eliminado con exito' ,'Registro Eliminado');
      this.getRegistros();
    }, error => {
      console.log(error);
    })
  }

}
