import { Router } from 'express'
import { deleteMensaje, getMensaje, getMensajes, postMensaje, updateMensaje } from '../controllers/MensajeController'

const routerM = Router();
routerM.get('/mensaje', getMensajes);
routerM.get('/mensaje/:id', getMensaje);
routerM.delete('/mensaje/:id', deleteMensaje);
routerM.post('/mensaje', postMensaje);
routerM.put('/mensaje/:id', updateMensaje);

export default routerM;