import CarroModel from "./carro-model";

export default class CaminhoneteModel implements CarroModel{
    id: number;
    ano: number;
    placa: string;
    renavam: string;
    valorFipe: number;
    marca: string;
    modelo: string;
    capacidade: number;

    constructor(id: number, ano: number, placa: string,
        renavam: string, valorFipe: number, marca: string,
        modelo: string, capacidade: number){
        
        this.id = id;
        this.ano = ano;
        this.placa = placa;
        this.renavam = renavam;
        this.valorFipe = valorFipe;
        this.marca = marca;
        this.modelo = modelo;
        this.capacidade = capacidade;       
    }

    dirigir(): void {
        console.log('Voce está dirigindo uma caminhonete....');
    }
    vender(): void {
        console.log('Voce está vendendo uma caminhonete....');
    }

    alugar(): void{
        console.log(`Você está alugando a caminhonete ${this.marca} 
        ${this.modelo}`);
    }
}