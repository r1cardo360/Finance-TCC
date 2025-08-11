import { Request, Response } from "express";
import { UsuarioService } from "../services/usuarioService";

export class Usuario{
    static async register(req: Request, res: Response){
        try{
            const {nome, email, senha, fkEndereco, img} = req.body;
            //rota cadastrar endereco
            await UsuarioService.registrar(nome, email, senha, fkEndereco, img);
            return res.status(200).json({message:'Usuario Registrado com sucesso!'});
        }catch(err: any){
            return res.status(500).json({error: err.message});
        }
    }
}