import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccederComponent } from './Component/acceder/acceder.component';
import { HomeComponent } from './Component/home/home.component';
import { AgregarArchivoComponent } from './Component/agregar-archivo/agregar-archivo.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { PerfilComponent } from './Component/perfil/perfil.component';
import { CursosComponent } from './Component/cursos/cursos.component';
import { CrearCursoComponent } from './Component/crear-curso/crear-curso.component';
import { ConfiguracionComponent } from './Component/configuracion/configuracion.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccederComponent,
    HomeComponent,
    AgregarArchivoComponent,
    PerfilComponent,
    // CursosComponent,
    CrearCursoComponent,
    ConfiguracionComponent
  ],
  imports: [
    BrowserModule,
    NgModule,
    AppRoutingModule,
    NgbModule,
    NgModel,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
