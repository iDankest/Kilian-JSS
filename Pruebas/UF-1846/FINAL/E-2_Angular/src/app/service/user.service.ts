import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url= 'http://127.0.0.1:3000/api/users/'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(this.url)
  }

  eliminarUser(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarUser(User: User): Observable<any> {
    return this.http.post(this.url, User);
  }

  obtenerUser(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarUser(id: string, User: User): Observable<any>{
    return this.http.put(this.url + id, User)

  }
}