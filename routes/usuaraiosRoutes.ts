import { Router } from "express";
import { Usuario } from '../controllers/usuariosController';

const router = Router();

router.post('/auth/register', async(req, res) => {
    await Usuario.register(req, res);
});

export default router;
