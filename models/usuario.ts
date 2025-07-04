import {Endereco} from './endereco';

export class Usuraio{
    public id: number;
    public nome: string;
    public email: string;
    public senha: string;
    public endereco: Endereco;
    public tipoCadastro: number;
    public image: string;
    public emailVerificar: boolean;
    public createdAt: any;
    public updatedAt: any;
    constructor(
        id:number,
        nome: string,
        email: string,
        senha: string,
        endereco: Endereco,
        tipoCadastro: number,
        image: string,
        emailVerificar: boolean,
        createdAt: any,
        updatedAt: any
    ){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.endereco = endereco;
        this.tipoCadastro = tipoCadastro;
        this.image = image;
        this.emailVerificar = emailVerificar;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}