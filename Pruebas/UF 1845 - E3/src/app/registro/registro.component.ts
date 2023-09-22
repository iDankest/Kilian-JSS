import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr'

import { Registrad } from '../Models/registro'
import { GRegistroService } from '../servicios/gregistro.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  registroForm: FormGroup;
  titulo = 'Crear curso';
    id: string | null;
    constructor(private fb: FormBuilder,
                private router: Router,
                private toastr: ToastrService,
                private _RegistroService: GRegistroService,
                private aRouter: ActivatedRoute) { 
      this.registroForm = this.fb.group({
        nick: ['', Validators.required],
        email: ['', Validators.required],
        pass: ['', Validators.required]
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    
  }
  agregarRegistro() {
    const REGISTRO: Registrad = {
      nick: this.registroForm.get('nick')?.value,
      email: this.registroForm.get('email')?.value,
      pass: this.registroForm.get('pass')?.value
    }
  
    if (REGISTRO.nick !== '' && REGISTRO.email !== '' && REGISTRO.pass !== '') {
      // Realizar acciones para guardar el registro en la base de datos
      this._RegistroService.guardarRegistro(REGISTRO).subscribe(data => {
        this.toastr.success('El registro fue guardado con éxito!', 'Registro Guardado!');
        this.router.navigate(['/']); // Redirigir a otra página después de guardar el registro
      }, error => {
        console.log(error);
        this.registroForm.reset();
      });
    } else {
      // Realizar acciones si faltan campos requeridos en el formulario
      this.toastr.error('Por favor, complete todos los campos requeridos.', 'Error');
    }
  }
hide = true;
}
