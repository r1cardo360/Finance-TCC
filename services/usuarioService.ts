//regra de negocio mais banco de dados
import {query} from '../databases/db';

export class UsuarioService{
    static async registrar(nome: string, email: string, senha: string, fkEndereco: number, img: string){
        const imagem = img || null;
        const res = await query('INSERT INTO usuarios(usu_nome, usu_email, usu_senha, usu_fk_endereco, usu_img) VALUES($1, $2, $3, $4, $5)',
        [
            nome, 
            email,
            senha,
            fkEndereco,
            imagem,
        ]);
    }
}
