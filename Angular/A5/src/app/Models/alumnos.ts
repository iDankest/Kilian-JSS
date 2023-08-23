//Ejemplo de crear una variable 
export var profesorBase ={
    nombre: "Manuel",
    apellidos: "M.P",
    correo: "manuelmacpe@gmail.com",
    foto: "./assets/media/fotommp.jpg"
}
//mejor manera que trabaja TypeScript
export class alumnosBD{

    constructor(
        public nombreA: String,
        public apellidoA: String,
        public edadA: number,
        public correoA: string,
        public telefonoA: string,
        public fotoA: string,
        public estadoA: boolean,
    ){}
}