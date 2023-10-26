import { Router } from 'express';
import { loginUser, newUser } from '../services/user.Auth';

const router = Router();

router.post('/registro', newUser);
router.post('/acceso', loginUser);
// router.post('/logout', logoutUser); // Agrega la ruta para cerrar sesión
// Ruta para el cierre de sesión
router.post('/api/logout', (req, res) => {
    // Aquí puedes agregar lógica para eliminar el token de autenticación
    // y realizar cualquier otra acción necesaria para cerrar la sesión.
    // Luego, envía una respuesta al cliente.
    res.status(200).json({ message: 'Cierre de sesión exitoso' });
  });

export default router;