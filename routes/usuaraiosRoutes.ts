import { Router, Request, Response } from "express";
import {Usuario} from '../controllers/usuariosController';

const router = Router();

router.post('/auth/register', Usuario.register);

router.post('/auth/login', (req: Request, res: Response) => {
    res.json({message: 'Teste'});
});

router.post('/auth/refresh', (req:Request, res:Response) => {

});

router.post('/auth/logout', (req: Request, res: Response) => {

});

router.get('/auth/me', (req: Request, res: Response) => {

});

router.get('/auth/verify-email/:token', (req: Request, res:Response) => {

});

router.post('/auth/send-verification', (req: Request, res: Response) => {

});

router.post('/auth/forgot-password', (req: Request, res: Response) => {

});

router.post('/auth/reset-password/:token', (req: Request, res: Response) => {

});

export default router;
