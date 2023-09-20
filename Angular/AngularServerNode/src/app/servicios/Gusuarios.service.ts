import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { GUsuario } from '../Models/gusuario';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})
export class UsuarioService {
    url = 'http://127.0.0.1:3700/api/usuario/';
    constructor(private http: HttpClient) { }

    getUsuarios(): Observable<any>{
        return this.http.get<GUsuario[]>(this.url + 'getUsuarios');
    }

    getUsuario(_id: string): Observable<any> {
        return this.http.get<GUsuario>(this.url + 'getUsuario/' + _id);
    }

    createUsuario(login: GUsuario): Observable<any> {
        return this.http.post(this.url, login);
      }

    updateUsuario(usuario: GUsuario):Observable<any> {
        return this.http.put<GUsuario>(this.url + 'updateUsuario/' + usuario._id, usuario);
    }

    deleteUsuario(_id: string):Observable<any> {
        return this.http.delete<GUsuario>(this.url + 'deleteUsuario/' + _id);
    }

    login(usuario: GUsuario):Observable<any> {
        return this.http.post<GUsuario>(this.url + 'login', usuario);
    }
}