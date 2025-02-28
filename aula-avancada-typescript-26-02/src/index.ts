// Exercício 1

import { Veiculo } from './interfaces/Veiculo';
import { Carro } from "./interfaces/Carro";
import { Moto } from "./interfaces/Moto";

const meuCarro: Carro = {
    marca: "Chevrolet",
    modelo: "Tracker",
    ano: 2019,
    portas: 4,
};
const minhaMoto: Moto = {
    marca: "Honda",
    modelo: "Biz 125",
    ano: 2024,
    cilindradas: 120,
};
console.log("Carro:", meuCarro);
console.log("Moto:", minhaMoto);

let gerenciaCarro: GerenciadorVeiculos<Carro> 

gerenciaCarro.adicionarVeiculo(meuCarro);
console.log(gerenciaCarro.pegarVeiculos)
gerenciaCarro.removerVeiculo(meuCarro, 0);
console.log(gerenciaCarro.pegarVeiculos)

// Exercício 2

import { EstoqueVeiculos } from "./classes/EstoqueVeiculos";
const estoque = new EstoqueVeiculos();

estoque.adicionarEstoque("Tracker", 5);
estoque.adicionarEstoque("Biz 125", 2);

console.log("Estoque após adição:", estoque.consultarEstoque("Tracker"));

estoque.removerEstoque("Tracker", 3);

console.log("Estoque após remoção:", estoque.consultarEstoque("Tracker"));

// Exercício 3


import { filtrarPorAno, filtrarPorMarca, filtrarPorModelo } from "./utils/FiltroVeiculo";

const veiculos: Veiculo[] = [
    { modelo: "Tracker", ano: 2019, marca: "Chevrolet" },
    { modelo: "Biz 125", ano: 2024, marca: "Honda" }
];

console.log("Veículos de 2024:", filtrarPorAno(veiculos, 2024));

console.log("Veículos da marca Chevrolet:", filtrarPorMarca(veiculos, "Chevrolet"));

console.log("Veículo modelo Honda:", filtrarPorModelo(veiculos, "Honda"));