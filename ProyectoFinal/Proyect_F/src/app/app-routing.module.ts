import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccederComponent } from './Component/acceder/acceder.component';
import { HomeComponent } from './Component/home/home.component';
import { AgregarArchivoComponent } from './Component/agregar-archivo/agregar-archivo.component';
import { RegistroComponent } from './Component/registro/registro.component';
import { ContactoComponent } from './Component/contacto/contacto.component';
import { ConfiguracionComponent } from './Component/configuracion/configuracion.component';


const routes: Routes = [
  { path: '', component:HomeComponent },
  {path: 'acceder', component:AccederComponent},
  {path: 'subir', component:AgregarArchivoComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'contacto',component:ContactoComponent},
  {path: 'configuracion',component:ConfiguracionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
