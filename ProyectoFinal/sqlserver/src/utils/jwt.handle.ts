import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

const generarToken = (id:string) => {
    const jwt = sign({ id }, JWT_SECRET, { expiresIn: "1h" });
    return jwt;
}

const verificarToken = (jwt: string) => {
    const EsOk = verify(jwt, JWT_SECRET);
return EsOk;

}

export{ generarToken, verificarToken}