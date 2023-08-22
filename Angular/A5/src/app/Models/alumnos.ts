export var profesorBase ={
    nombre: "Manuel",
    apellidos: "M.P",
    correo: "manuelmacpe@gmail.com",
    foto: "./assets/media/fotommp.jpg"
}

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