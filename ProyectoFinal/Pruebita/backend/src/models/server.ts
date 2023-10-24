import express, { Application } from 'express';
import cors from 'cors';
import routesUser from '../routes/user';
import { routerFile } from '../routes/storage'
import { User } from './user';
import  Archivo  from './storage'
import routerC from '../routes/curso'
import GCurso from './curso';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();     
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes() {
        this.app.use('/api/users', routesUser);
        this.app.use('/api/upload', routerFile)
        this.app.use('/api/curso', routerC)
    }

    midlewares() {
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
           
            await User.sync();
            await Archivo.sync();
            await GCurso.sync();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;