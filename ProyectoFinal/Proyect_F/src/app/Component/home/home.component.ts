import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';
import { cursos } from 'src/app/models/curso.model';

@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cursos = [
    new cursos(1, 'HTML', 'Aprender fundamentos', 30, '../../../assets/media/html.png'),
    new cursos(2, 'CSS', 'Aprender fundamentos', 90, '../../../assets/media/css.png'),
    new cursos(3, 'JAVASCRIPT', 'Aprender fundamentos', 180, '../../../assets/media/javascript.jpg')
  ];
 constructor(public dialog: MatDialog) {}

 openDialog(): void {
   this.dialog.open(ModalComponent);
 }

}