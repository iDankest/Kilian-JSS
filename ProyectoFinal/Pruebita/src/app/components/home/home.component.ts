import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { ModalComponent } from './modal.component';
import { GCurso } from 'src/app/config/Modelos/gcurso';

@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // GCurso = [
  //   new GCurso('JAVASCRIPT', 'Aprender fundamentos','Informatica', '../assets/media/img/html.png', 180, 'cosas', ''),
  //   new GCurso('JAVASCRIPT', 'Aprender fundamentos','Informatica', '../assets/media/img/css.png', 180, 'cosas', ''),
  //   new GCurso('JAVASCRIPT', 'Aprender fundamentos','Informatica', '../assets/media/img/javascript.jpg', 180, 'cosas', '')
  // ];
//  constructor(public dialog: MatDialog) {}

//  openDialog(): void {
//    this.dialog.open(ModalComponent);
//  }

}
