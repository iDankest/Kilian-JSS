import { Router } from 'express'
import { deleteTarea, getTarea, getTareas, postTarea, updateTarea } from '../controllers/TareasController'

const routerT = Router();
routerT.get('/tarea', getTareas);
routerT.get('/tarea/:id', getTarea);
routerT.delete('/tarea/:id', deleteTarea);
routerT.post('/tarea', postTarea);
routerT.put('/tarea/:id', updateTarea);

export default routerT;