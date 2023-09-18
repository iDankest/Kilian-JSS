export class Registrad{
	public _id?: string
	public nick: string
	public email: string
	public pass: string
	constructor(nick: string, email: string, pass: string){
        this.nick = nick;
        this.email = email;
        this.pass = pass;

    }
}