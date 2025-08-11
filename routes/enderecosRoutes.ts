import { Router } from "express";
import { Endereco } from "../controllers/enderecoController";

const router = Router();

router.post('/endereco/criarEndereco', async(req, res) => {
    await Endereco.criar(req, res);
});

export default router;
