import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import sequelize from './config/connectdb'

//Routers
import routerC  from './routes/CursoRoutes';
import routerM from './routes/MensajeRoutes';
import routerT from './routes/TareaRoutes';
import routerU from './routes/UsuarioRoutes';
import routerA from './routes/AdminRoutes';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routerC);
app.use(routerM);
app.use(routerT);
app.use(routerU);
app.use(routerA)

app.listen(PORT, () => console.log(`Api conectada por el puerto ${PORT}`));

try {
    sequelize.authenticate();
    console.log('La conexión con la Base de Datos es correcta');
} catch (error){
    console.error('No se puede conectar con la base de datos', error);
}