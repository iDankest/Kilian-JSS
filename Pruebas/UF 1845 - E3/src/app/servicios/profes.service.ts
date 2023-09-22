import { Injectable } from "@angular/core";
import { ProfeDB } from "../Models/profesores";

@Injectable({
    providedIn: 'root'
})
export class ProfesService{
    private profesall: Array<ProfeDB>

    constructor(){
        this.profesall = [
            new ProfeDB(0, "Antonio", "hola2", "hola1"),
            new ProfeDB(1, "Eduardo", "", ""),
            new ProfeDB(2, "Manuel", "", ""),
        ]
    }
getProfes(): Array<ProfeDB>{
return this.profesall
}
}