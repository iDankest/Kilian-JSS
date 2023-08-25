import { Component } from '@angular/core';
import { productosDB } from '../models/productos';
@Component({
  selector: 'app-producto-a',
  templateUrl: './producto-a.component.html',
  styleUrls: ['./producto-a.component.css']
})
export class ProductoAComponent {
   public productosgaleryv: Array<productosDB>
   constructor(){
  this.productosgaleryv =[
    new productosDB(1, 10, '../../assets/v1.mp4', 'Para mas info contacte con nosotros'),
    new productosDB(1, 10, './../assets/v2.mp4', 'Para mas info contacte con nosotros'),
    new productosDB(1, 10, '../../assets/v3.mp4', 'Para mas info contacte con nosotros'),
    new productosDB(1, 10, '../../assets/v4.mp4', 'Para mas info contacte con nosotros'),
  ]
}
}
