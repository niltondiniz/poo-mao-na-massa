import PasseioModel from "./model/passeio-model";
import CarroModel from "./model/carro-model";
import CaminhoneteModel from "./model/caminhonete-model";

var chevette = new PasseioModel(1, 1986, 'KKK-3333', '2398409238423', 
                                5000, 'GM', 'Chevette 1.6 Alcool', 
                                'Sedan', 5);

//Aqui estou comprando um chevette
chevette.comprar();

//Aqui estou dirigindo um chevette
//Método da classe CarroModel
chevette.dirigir();

//Aqui estou vendendo um chevette
//Método da classe CarroModel
chevette.vender();

//==========================================================
//
var carro: CarroModel;
carro = chevette;

carro.modelo = 'Corvette';

carro.dirigir();


//========================================================
var silverado = new CaminhoneteModel(2, 2023, 'KKK-3333', '2398409238423', 
                                221000, 'GM', 'Silverado', 
                                1000);

silverado.dirigir();

//============================================================
//Abstração

chevette = silverado;

