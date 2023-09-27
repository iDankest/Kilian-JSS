import { Router } from "express";
import {deleteCurso, getCurso, getCursos, postCurso, updateCurso} from '../controllers/CursoController'

const router = Router();
router.get('/', getCursos)
router.get('/:id', getCurso)
router.post('/', postCurso)
router.put('/:id', updateCurso)
router.delete('/:id', deleteCurso)

export default router;