import { Router, Request, Response } from "express";

const router = Router();

router.get('/auth', (req: Request, res: Response) => {
    res.json({message: 'Teste'});
});

export default router;
