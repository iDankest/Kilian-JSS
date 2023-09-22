import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registrad } from '../Models/registro';

@Injectable({
  providedIn: 'root'
})
export class GRegistroService {

  url= 'http://localhost:3700/api/registro/'

  constructor(private http: HttpClient) { }

  getCursos(): Observable<any>{
    return this.http.get(this.url)
  }

  eliminarCurso(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarRegistro (login: Registrad): Observable<any> {
    return this.http.post(this.url, login);
  }

  obtenerCurso(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCurso(id: string, login: Registrad): Observable<any>{
    return this.http.put(this.url + id, login)

  }
}
