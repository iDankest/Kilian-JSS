import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import  router  from './routes/CursoRoutes';
import sequelize from './config/connectdb';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

// app.use(router);

app.listen(PORT, () => {
    console.log(`Esto funciona amigo ${PORT}`);
});
try {
    sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa');
}catch (error) {
    console.log('Error en la conexión a la base de datos', error);
}