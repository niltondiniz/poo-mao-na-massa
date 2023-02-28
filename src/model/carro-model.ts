export default class CarroModel{
    id: number;
    ano: number;
    placa: string;
    renavam: string;
    valorFipe: number;
    marca: string;
    modelo: string;

    constructor(id: number, ano: number, placa: string,
        renavam: string, valorFipe: number, marca: string,
        modelo: string){
        this.id = id;
        this.ano = ano;
        this.placa = placa;
        this.renavam = renavam;
        this.valorFipe = valorFipe;
        this.marca = marca;
        this.modelo = modelo;        
    }

    dirigir(): void{
        console.log(`Você está dirigindo um ${this.marca} ${this.modelo}`);
    }

    vender(): void{
        console.log(`Você está vendendo o carro por ${this.valorFipe}`);
    }
}