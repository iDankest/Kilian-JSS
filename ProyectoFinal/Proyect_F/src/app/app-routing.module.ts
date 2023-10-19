import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccederComponent } from './Component/acceder/acceder.component';
import { HomeComponent } from './Component/home/home.component';
import { AgregarArchivoComponent } from './Component/agregar-archivo/agregar-archivo.component';
import { RegistroComponent } from './Component/registro/registro.component';
import { ContactoComponent } from './Component/contacto/contacto.component';
import { ConfiguracionComponent } from './Component/configuracion/configuracion.component';
import { CrearCursoComponent } from './Component/crear-curso/crear-curso.component';
import { CursosComponent } from './Component/cursos/cursos.component';
import { PerfilComponent } from './Component/perfil/perfil.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  {path: 'acceder', component:AccederComponent},
  {path: 'subir', component:AgregarArchivoComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'contacto',component:ContactoComponent},
  {path: 'confi',component:ConfiguracionComponent},
  {path: 'crear',component:CrearCursoComponent},
  {path: 'cursos',component:CursosComponent},
  {path: 'perfil',component:PerfilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
