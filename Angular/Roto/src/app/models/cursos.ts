export class cursosDB{
    static _id: string;
    constructor(
        public _id: string,
        public name: string,
        public descriptio: string,
        public category: string,
        public duracion: number,
        public temas: string,
        public image: string
    ){}
}