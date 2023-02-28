import CarroModel from "./carro-model";

export default class VanModel extends CarroModel{
    categoria: string;

    constructor(id: number, ano: number, placa: string,
        renavam: string, valorFipe: number, marca: string,
        modelo: string, categoria: string){
        super(id, ano, placa, renavam, valorFipe, marca, modelo);
        this.categoria = categoria;        
    }

    transportar(): void{
        console.log(`Você está transportando 
        numa van categoria: ${this.categoria}`);
    }
}