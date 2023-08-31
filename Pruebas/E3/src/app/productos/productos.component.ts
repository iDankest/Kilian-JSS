import { Component, OnInit } from '@angular/core';
import { ProductoListService } from '../service/productos.service';
import { productosDB } from '../models/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public productos: Array<productosDB> = []; // Cambia el tipo según la estructura de datos
  public modalVisible: boolean = false;
  constructor(private productoListService: ProductoListService) {}

  ngOnInit() {
    // Aquí obtienes los productos desde el servicio
    this.productos = this.productoListService.getese();
  }
 

  abrirModal() {
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
  }
}
