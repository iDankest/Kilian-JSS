import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccederComponent } from './Component/acceder/acceder.component';
import { HomeComponent } from './Component/home/home.component';
import { AgregarArchivoComponent } from './Component/agregar-archivo/agregar-archivo.component';


const routes: Routes = [
  { path: '', component:HomeComponent },
  {path: 'acceder', component:AccederComponent},
  {path: 'subir', component:AgregarArchivoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
