import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ListarCursoComponent} from './components/listar-curso/listar-curso.component'
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { AgregarArchivoComponent } from './components/agregar-archivo/agregar-archivo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';

// Guards
import { AuthGuard } from './utils/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent },
  {path: 'cursos', component: ListarCursoComponent},
  {path: 'crearCurso', component: CrearCursoComponent},
  {path: 'editarCurso/:id', component: CrearCursoComponent},
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'archivos', component: AgregarArchivoComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'archivos', component: AgregarArchivoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
