import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {
  private apiUrl = 'http://localhost:3000/api/archivos'; // Reemplaza con la URL de tu servidor

  constructor(private http: HttpClient) { }

  subirArchivo(archivo: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('archivo', archivo, archivo.name);

    return this.http.post(this.apiUrl, formData);
  }

  descargarArchivo(nombreArchivo: string): Observable<Blob> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${this.apiUrl}/${nombreArchivo}`, { responseType: 'blob', headers: headers });
  }
}
