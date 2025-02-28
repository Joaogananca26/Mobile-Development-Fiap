// Exercício 1

import { Veiculo } from './interfaces/Veiculo';
import { Carro } from "./interfaces/Carro";
import { Moto } from "./interfaces/Moto";

const meuCarro: Carro = {
    marca: "Chevrolet",
    modelo: "Tracker",
    ano: 2019,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
};
const minhaMoto: Moto = {
    marca: "Honda",
    modelo: "Biz 125",
    ano: 2024,
    cilindradas: 120,
    acelerar: () => "A moto está acelerando!"
};
console.log("Carro:", meuCarro);
console.log(meuCarro.acelerar());
console.log("Moto:", minhaMoto);
console.log(minhaMoto.acelerar());

let gerenciaCarro: GerenciadorVeiculos<Carro> 

gerenciaCarro.adicionarVeiculo(meuCarro);
console.log(gerenciaCarro.pegarVeiculos)
gerenciaCarro.removerVeiculo(meuCarro, 0);
console.log(gerenciaCarro.pegarVeiculos)

// Exercício 2

import { EstoqueVeiculos } from "./classes/EstoqueVeiculos";
const estoque = new EstoqueVeiculos();
// Adicionando veículos ao estoque
estoque.adicionarEstoque("Tracker", 5);
estoque.adicionarEstoque("Honda biz", 2);
// Consultando estoque de "Civic"
console.log("Estoque após adição:", estoque.consultarEstoque("Civic"));
// Removendo 3 unidades de "Civic"
estoque.removerEstoque("Civic", 3);
// Consultando estoque de "Civic" novamente
console.log("Estoque após remoção:", estoque.consultarEstoque("Civic"));