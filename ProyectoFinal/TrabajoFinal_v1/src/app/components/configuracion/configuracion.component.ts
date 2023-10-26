import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AgregarArchivoComponent } from '../agregar-archivo/agregar-archivo.component';
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class ConfiguracionComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AgregarArchivoComponent);
  }
}
