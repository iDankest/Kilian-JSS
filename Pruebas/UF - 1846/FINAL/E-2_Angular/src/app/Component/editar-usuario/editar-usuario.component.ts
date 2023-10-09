import { Component, OnInit  } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArchivoService } from '../../service/archivo.service';
import { Archivo } from '../../models/archivo';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent{
//   archivoForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private toastr: ToastrService,
//     private archivoService: ArchivoService // Importa el servicio para subir imágenes
//   ) {
//     this.archivoForm = this.fb.group({
//       archivo: [null, Validators.required] // El campo de entrada de archivo para la imagen
//     });
//   }

//   ngOnInit(): void {}

//   subirImagen() {
//     const formData = new FormData();
//     formData.append('archivo', this.archivoForm.get('archivo').value);

//     // Utiliza el servicio para subir la imagen
//     this.archivoService.subirArchivo(formData).subscribe(
//       (data) => {
//         this.toastr.success('La imagen se subió con éxito.', 'Imagen Subida');
//         // Restablece el formulario después de cargar la imagen
//         this.archivoForm.reset();
//       },
//       (error) => {
//         console.error(error);
//         this.toastr.error('Ocurrió un error al subir la imagen.', 'Error');
//       }
//     );
//   }
}