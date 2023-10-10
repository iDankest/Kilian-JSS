import { Router } from 'express'
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, updateUsuario } from '../controllers/UsuarioControler'

const routerU = Router();
routerU.get('/usuario', getUsuarios);
routerU.get('/usuario/:id', getUsuario);
routerU.delete('/usuario/:id', deleteUsuario);
routerU.post('/usuario', postUsuario);
routerU.put('/usuario/:id', updateUsuario);

export default routerU;