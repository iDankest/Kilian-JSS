import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccederComponent } from './Component/acceder/acceder.component';
import { HomeComponent } from './Component/home/home.component';
import { EditarUsuarioComponent } from './Component/editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  {path: 'acceder', component:AccederComponent},
  {path: 'acceder/editar', component:EditarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
