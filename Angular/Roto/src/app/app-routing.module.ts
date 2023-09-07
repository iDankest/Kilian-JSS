import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { CursosComponent } from './cursos/cursos.component';
import { InicioComponent } from './inicio/inicio.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearcursoComponent } from './crearcurso/crearcurso.component';

const routes: Routes = [
{path:"alumnos", component: AlumnosComponent},
{path:"cursos", component: CursosComponent},
{path:"profe", component: ProfesoresComponent},
{path:'', component: InicioComponent},
{path:'acceso', component: AccesoComponent},
{path: 'registro', component: RegistroComponent},
{path: 'contacto', component: ContactoComponent},
{path: 'crear-curso', component: CrearcursoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
