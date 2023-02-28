import CarroModel from "./carro-model";

export default class PasseioModel extends CarroModel{
    tipo: string;
    qtdLugares: number;

    constructor(id: number, ano: number, placa: string,
        renavam: string, valorFipe: number, marca: string,
        modelo: string, tipo: string, qtdLugares: number){
        super(id, ano, placa, renavam, valorFipe, marca, modelo);
        this.tipo = tipo;
        this.qtdLugares = qtdLugares;
    }

    comprar():void{
        console.log(`Você está comprando o ${this.marca} ${this.modelo} 
        por ${this.valorFipe}`);
    }
}