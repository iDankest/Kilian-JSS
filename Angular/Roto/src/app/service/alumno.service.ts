import { Injectable } from "@angular/core";
import { alumnosDB } from "../models/alumnos";

@Injectable({
    providedIn: "root"
})
export class AlumnosService{
    private alumnosA: Array<alumnosDB>
    constructor(){
        this.alumnosA = [
            new alumnosDB('Pepe', 'Suarez'),
            new alumnosDB('Antonico', 'Ramirez')
        ]
    }
    getTexto(){
        return "Texto que tu quieras"
    }
    getAlumnos(): Array<alumnosDB>{
        return this.alumnosA
    }

}