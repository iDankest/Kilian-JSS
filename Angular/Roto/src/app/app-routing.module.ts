import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
{path:"alumnos", component: AlumnosComponent},
{path:"cursos", component: CursosComponent},
{path:"profe", component: ProfesoresComponent}
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
