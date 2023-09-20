export class GUsuario{
    public _id?: string;
    public name: string;
    public lastname: string;
    public email: string;
    public password: string;
    public Fnacimiento: string;
    public telefono: string;
    public foto : string;
    public tipo: string;
    public fechadecreacion?: Date;
    constructor(
        name: string,
        lastname: string,
        email: string,
        password: string,
        Fnacimiento: string,
        telefono: string,
        foto: string,
        tipo: string,
        fechadecreacion: Date
    ){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.Fnacimiento = Fnacimiento;
        this.telefono = telefono;
        this.foto = foto;
        this.tipo = tipo;
        this.fechadecreacion = fechadecreacion;}

}