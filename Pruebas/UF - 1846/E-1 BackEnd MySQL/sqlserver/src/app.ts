import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import sequelize from './config/connectdb'

//Routers
import routerU from './routes/UsuarioRoutes';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.use(routerU);

app.listen(PORT, () => console.log(`Api conectada por el puerto ${PORT}`));

try {
    sequelize.authenticate();
    console.log('La conexión con la Base de Datos es correcta');
} catch (error){
    console.error('No se puede conectar con la base de datos', error);
}