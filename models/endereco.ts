export class Endereco{
    public id: number;
    public rua: string;
    public bairro: string;
    public cidade: string;
    public cep: string;
    public us: string;
    public pais: string;
    public numero: number;
    public complemento: string;
    
    constructor(
        id: number,
        rua: string,
        bairro: string,
        cidade: string,
        cep: string,
        us: string,
        pais: string,
        numero: number,
        complemento: string
    ){
        this.id = id;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.cep = cep;
        this.us = us;
        this.pais = pais;
        this.numero = numero;
        this.complemento = complemento;
    }
}