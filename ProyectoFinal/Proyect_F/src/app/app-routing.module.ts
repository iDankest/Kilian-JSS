import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//
import { AccederComponent } from './Component/acceder/acceder.component';
import { ContactoComponent } from './Component/contacto/contacto.component';

const routes: Routes = [
  {path:'acceder', component:AccederComponent},
  {path:'contacto', component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
