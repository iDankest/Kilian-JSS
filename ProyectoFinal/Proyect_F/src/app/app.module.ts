import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccederComponent,
    HomeComponent,
    AgregarArchivoComponent,
    PerfilComponent,
    CursosComponent,
    CrearCursoComponent,
    ConfiguracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
