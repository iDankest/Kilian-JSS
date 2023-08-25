import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoComponent } from './acceso/acceso.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoAComponent } from './producto-a/producto-a.component';
import { RegistroComponent } from './registro/registro.component';
const routes: Routes = [
  {path: 'acceso', component: AccesoComponent},
  {path: 'producto', component: ProductosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'productoA', component: ProductoAComponent},
  {path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
