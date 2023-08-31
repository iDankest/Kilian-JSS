import { Injectable } from '@angular/core';
import { productosDB } from '../models/productos';

@Injectable({
    providedIn: 'root'
})
export class ProductoListService {
    private productoLista: Array<productosDB>
    constructor() {
        this.productoLista = [
     new productosDB(1, 10, '../assets/i1.png', 'Para mas info contacte con nosotros'),
     new productosDB(2, 10, '../../assets/i2.png', 'Para mas info contacte con nosotros'),
     new productosDB(3, 10, '../../assets/i3.png', 'Para mas info contacte con nosotros'),
     new productosDB(4, 10, '../../assets/i4.png', 'Para mas info contacte con nosotros'),
        ]
}
getese():Array<productosDB>{
    return this.productoLista
}
}
