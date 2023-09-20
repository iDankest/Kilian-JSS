import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr'

import { GUsuario } from '../Models/gusuario';
import {UsuarioService} from '../servicios/Gusuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  registroForm: FormGroup;
  titulo = 'Registro';
    id: string | null;
    constructor(private fb: FormBuilder,
                private router: Router,
                private toastr: ToastrService,
                private _UsuarioService: UsuarioService,
                private aRouter: ActivatedRoute) { 
      this.registroForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        lastname: ['', Validators.required],
        telefono: ['', Validators.required],
        Fnacimiento: ['', Validators.required],
        tipo: ['', Validators.required],
        foto: ['', Validators.required]
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    
  }
  agregarRegistro() {
    const REGISTRO: GUsuario = {
      name: this.registroForm.get('name')?.value,
      email: this.registroForm.get('email')?.value,
      password: this.registroForm.get('password')?.value,
      lastname: this.registroForm.get('lastname')?.value,
      telefono: this.registroForm.get('telefono')?.value,
      tipo: this.registroForm.get('tipo')?.value,
      Fnacimiento: this.registroForm.get('Fnacimiento')?.value,
      foto: this.registroForm.get('foto')?.value,
    }
  
    if (REGISTRO.name !== '' && REGISTRO.email !== '' && REGISTRO.password !== '') {
      // Realizar acciones para guardar el registro en la base de datos
      this._UsuarioService.createUsuario(REGISTRO).subscribe(data => {
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

  
