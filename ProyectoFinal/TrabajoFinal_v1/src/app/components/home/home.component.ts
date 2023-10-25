import { Component } from '@angular/core';
import { GCurso } from 'src/app/models/cursoModelo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  GCurso = [
    new GCurso('JAVASCRIPT', 'Aprender fundamentos','Informatica', '../assets/media/img/html.png', 180, 'cosas', ''),
    new GCurso('JAVASCRIPT', 'Aprender fundamentos','Informatica', '../assets/media/img/css.png', 180, 'cosas', ''),
    new GCurso('JAVASCRIPT', 'Aprender fundamentos','Informatica', '../assets/media/img/javascript.jpg', 180, 'cosas', '')
  ];
}
