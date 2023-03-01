import CarroModel from "./carro-model";

export default class PasseioModel implements CarroModel{
    id: number;
    ano: number;
    placa: string;
    renavam: string;
    valorFipe: number;
    marca: string;
    modelo: string;
    tipo: string;
    qtdLugares: number;

    dirigir(): void {
        console.log('Voce está dirigin....');
    }
    vender(): void {
        console.log('Voce está vendendo....');
    }
   

    constructor(id: number, ano: number, placa: string,
        renavam: string, valorFipe: number, marca: string,
        modelo: string, tipo: string, qtdLugares: number){        
        
        this.id = id;
        this.ano = ano;
        this.placa = placa;
        this.renavam = renavam;
        this.valorFipe = valorFipe;
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.qtdLugares = qtdLugares;
    }

    comprar():void{
        console.log(`Você está comprando o ${this.marca} ${this.modelo} por ${this.valorFipe}`);
    }
}