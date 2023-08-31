import { Injectable } from '@angular/core';
import { ServiciosBD } from '../models/lstServicios';

@Injectable({
  providedIn: 'root'
})
export class ListaserviciosService {
  private listaServicios: Array<ServiciosBD>
  constructor() { 
    this.listaServicios = [
                new ServiciosBD("100", "Dibujo","Creacion de ilustraciones 2D", 60,"./assets/mago.png", true), 
                new ServiciosBD("101", "Digital","Creacion de ilustraciones con tecnologias digitales", 160,"./assets/digital.png", true), 
                new ServiciosBD("102", "Model","Modelado 3D", 160,"./assets/3d.jpg", true),
                new ServiciosBD("103", "Diseño","Maquetacion y diseño de paginas web", 300,"./assets/web.jpg", true)
              ]
  }
  getServicios():Array<ServiciosBD>{
    return this.listaServicios
  }

}
