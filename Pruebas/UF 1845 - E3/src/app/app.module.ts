import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthModule } from '@auth0/auth0-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Components
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearcursoComponent } from './crearcurso/crearcurso.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TareasComponent } from './tareas/tareas.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {CdkListboxModule} from '@angular/cdk/listbox';
import {DialogModule} from '@angular/cdk/dialog';
import { ListaRegistroComponent } from './lista-registro/lista-registro.component';





@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursoComponent,
    AlumnosComponent,
    AlumnoComponent,
    ProfesorComponent,
    ProfesoresComponent,
    AccesoComponent,
    RegistroComponent,
    ContactoComponent,
    CrearcursoComponent,
    CrearCursoComponent,
    ListarCursoComponent,
    HeaderComponent,
    DashboardComponent,
    TareasComponent,
    ListaRegistroComponent
  ],
  imports: [
    DialogModule,
    CdkListboxModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AuthModule.forRoot({
      domain: 'estadistica.auth0.com',
      clientId: 'knBYg5PAoX8zjj7uG9ShFEMQuqtAUGAQ'})
  ],
  providers: [],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
