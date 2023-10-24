import { Router } from 'express';
import { deleteCurso, getCurso, getCursos, postCurso, updateCurso } from '../controllers/gcurso';
// import validateToken from '../services/validate-token';

const routerC = Router();

routerC.get('/',  getCursos);
routerC.get('/:id',  getCurso);
routerC.delete('/:id',  deleteCurso);
routerC.post('/',  postCurso);
routerC.put('/:id',  updateCurso);

export default routerC;