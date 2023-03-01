export default interface CarroModel{
    id: number;
    ano: number;
    placa: string;
    renavam: string;
    valorFipe: number;
    marca: string;
    modelo: string;    

    dirigir(): void;
    vender(): void;
}