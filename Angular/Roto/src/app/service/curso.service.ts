import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { cursosDB } from "../models/cursos";
import { Global } from "./global.service";

@Injectable()
export class save_cursoService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
    testService(){
        return 'Probando el servicio de angular'
    }
    saveCurso(curso: cursosDB): Observable<any>{
        let params = JSON.stringify(curso);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'save-curso', params,{headers: headers});
    }
    getCursos(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'cursos', {headers: headers});
    }
    deleteCurso(id: string): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'curso/'+id, {headers: headers});
    }
    updateCurso(curso: any): Observable<any>{
        let params = JSON.stringify(curso);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'curso/'+cursosDB._id, params, {headers: headers});
    }
}