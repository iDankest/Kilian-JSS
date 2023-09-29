import { Router } from 'express'
import { deleteCurso, getCurso, getCursos, postCurso, updateCurso } from '../controllers/CursoController'

const routerC = Router();
routerC.get('/cursos', getCursos);
routerC.get('/cursos/:id', getCurso);
routerC.delete('/cursos/:id', deleteCurso);
routerC.post('/cursos', postCurso);
routerC.put('/cursos/:id', updateCurso);

export default routerC;