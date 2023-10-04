import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { AccederComponent } from './Component/acceder/acceder.component';
import { ContactoComponent } from './Component/contacto/contacto.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'acceder', component:AccederComponent},
  {path:'contacto', component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
