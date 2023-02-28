import CarroModel from "./carro-model";

export default class CaminhoneteModel extends CarroModel{
    capacidade: number;

    constructor(id: number, ano: number, placa: string,
        renavam: string, valorFipe: number, marca: string,
        modelo: string, capacidade: number){
        super(id, ano, placa, renavam, valorFipe, marca, modelo);
        this.capacidade = capacidade;       
    }

    alugar(): void{
        console.log(`Você está alugando a caminhonete ${this.marca} 
        ${this.modelo}`);
    }
}