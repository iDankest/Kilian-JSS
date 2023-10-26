import { RestService } from '../../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-archivo',
  templateUrl: './agregar-archivo.component.html',
  styleUrls: ['./agregar-archivo.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class AgregarArchivoComponent implements OnInit{
  
  public archivos: any = []
  public loading: boolean | undefined

  constructor(private rest: RestService,public dialogRef: MatDialogRef<AgregarArchivoComponent>, private msg: ToastrService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }
  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0]  
    this.archivos.push(archivoCapturado)
  }
   
  // Subir archivo
  
  subirArchivo(): any {
    try {
      this.loading = true;
      const formularioDeDatos = new FormData();
      this.archivos.forEach((archivo: string) => {
        formularioDeDatos.append('myfile', archivo)
      })
      this.rest.post(`http://localhost:3001/api/upload`, formularioDeDatos)
        .subscribe(res => {
          this.loading = false;
          console.log('Respuesta del servidor', res);
          this.msg.success('Archivo subido correctamente', 'Archivo subido');
        }, () => {
          this.loading = false;
          alert('Error');
        })
    } catch (e) {
      this.loading = false;
      console.log('ERROR', e);
    }
  }
}
