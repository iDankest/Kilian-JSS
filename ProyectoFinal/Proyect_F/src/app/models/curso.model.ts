export class cursos{
    id:number;
    nombre:string;
    descripcion:string;
    duracion:number;
    imagen:string;

    constructor(id:number, nombre:string, descripcion:string, duracion:number, imagen:string){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.imagen = imagen;
    }
}