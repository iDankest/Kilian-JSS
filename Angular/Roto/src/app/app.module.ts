import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { InicioComponent } from './inicio/inicio.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { CrearcursoComponent } from './crearcurso/crearcurso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    ProfesoresComponent,
    AlumnosComponent,
    InicioComponent,
    AccesoComponent,
    RegistroComponent,
    ContactoComponent,
    CabeceraComponent,
    PieComponent,
    CrearcursoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
