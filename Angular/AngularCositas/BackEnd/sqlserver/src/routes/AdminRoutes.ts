import { Router } from 'express'
import { deleteAdmin, getAdmin, getAdmins, postAdmin, updateAdmin } from '../controllers/AdminController'

const routerA = Router();
routerA.get('/admins', getAdmins);
routerA.get('/admins/:id', getAdmin);
routerA.delete('/admins/:id', deleteAdmin);
routerA.post('/admins', postAdmin);
routerA.put('/admins/:id', updateAdmin);

export default routerA;