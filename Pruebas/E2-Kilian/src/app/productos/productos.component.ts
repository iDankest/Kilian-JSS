import { Component } from '@angular/core';
import { productosDB } from '../models/productos';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
 public productosgalery: Array<productosDB>
 public modalVisible: boolean[];
 constructor(){
  this.productosgalery = [
    new productosDB(1, 10, '../assets/i1.png', 'Para mas info contacte con nosotros'),
    new productosDB(2, 10, '../../assets/i2.png', 'Para mas info contacte con nosotros'),
    new productosDB(3, 10, '../../assets/i3.png', 'Para mas info contacte con nosotros'),
    new productosDB(4, 10, '../../assets/i4.png', 'Para mas info contacte con nosotros'),
  ];
  this.modalVisible = Array(this.productosgalery.length).fill(false);
}

abrirModal(index: number) {
  this.modalVisible[index] = true;
}

cerrarModal(index: number) {
  this.modalVisible[index] = false;
}
  
 }


