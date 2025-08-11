import { Request, Response } from "express";

export class Endereco{
    static async criar(req: Request, res: Response){
        try{
            const {rua, bairro, cidade, cep, us, pais, numero, complemento} = req.body;
            return res.status(200).json();
        }catch(err){
            return res.status(500).json();
        }
    }
}