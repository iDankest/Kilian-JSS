import { Component, OnInit} from '@angular/core';
import { GRegistroService } from '../servicios/gregistro.service';
import { Registrad } from '../Models/registro';


@Component({
  selector: 'app-lista-registro',
  templateUrl: './lista-registro.component.html',
  styleUrls: ['./lista-registro.component.css']
})
export class ListaRegistroComponent implements OnInit{
  listRegistrad: Registrad[]=[];

  constructor(private _registroService: GRegistroService){

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
}
