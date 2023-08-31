import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccesoComponent } from './acceso/acceso.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoAComponent } from './producto-a/producto-a.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';
import { GestionServiciosComponent } from './gestion-servicios/gestion-servicios.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AccesoComponent,
    ProductosComponent,
    ContactoComponent,
    ProductoAComponent,
    RegistroComponent,
    ListaServiciosComponent,
    GestionServiciosComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
