import { Injectable } from "@angular/core";
import { ProfeDB } from "../Models/profesores";

@Injectable({
    providedIn: 'root'
})
export class ProfesService{
    private profesall: Array<ProfeDB>

    constructor(){
        this.profesall = [
            new ProfeDB("", "", "", ""),
            new ProfeDB("", "", "", ""),
            new ProfeDB("", "", "", ""),
        ]
    }
getProfes(): Array<ProfeDB>{
return this.profesall
}
}