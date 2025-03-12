// Exercício 1

import { Carro } from "./interfaces/Carro";
import { Moto } from "./interfaces/Moto";
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { EstoqueVeiculos } from "./classes/EstoqueVeiculos";
import { filtrarPorAno, filtrarPorMarca, filtrarPorModelo } from "./utils/FiltroVeiculo";
import { gerarRelatorio } from "./utils/RelatorioVeiculo";
import { Veiculo } from "./interfaces/Veiculo";

const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gerenciadorMotos = new GerenciadorVeiculos<Moto>();

gerenciadorCarros.adicionar({ modelo: "Tracker", ano: 2019, marca: "Chevrolet", quantidadePortas: 4 });
gerenciadorMotos.adicionar({ modelo: "Honda biz 125", ano: 2023, marca: "Honda", cilindradas: 125 });

console.log("Lista de Carros:", gerenciadorCarros.listarVeiculos());
console.log("Lista de Motos:", gerenciadorMotos.listarVeiculos());

gerenciadorCarros.remover("Tracker");
gerenciadorMotos.remover("Honda biz 125");

console.log("Após remoção:", gerenciadorCarros.listarVeiculos());
console.log("Após a remoção: ", gerenciadorMotos.listarVeiculos());


// Exercício 2

const estoque = new EstoqueVeiculos();

estoque.adicionarEstoque("Tracker", 5);
estoque.adicionarEstoque("Biz 125", 2);

console.log("Estoque após adição:", estoque.consultarEstoque("Tracker"));

estoque.removerEstoque("Tracker", 3);

console.log("Estoque após remoção:", estoque.consultarEstoque("Tracker"));

// Exercício 3

const veiculos: Veiculo[] = [
    { modelo: "Tracker", ano: 2019, marca: "Chevrolet" },
    { modelo: "biz 125", ano: 2024, marca: "Honda" }
];

console.log("Veículos de 2024:", filtrarPorAno(veiculos, 2024));

console.log("Veículos da marca Chevrolet:", filtrarPorMarca(veiculos, "Chevrolet"));

console.log("Veículo modelo Biz:", filtrarPorModelo(veiculos, "biz 125"));

// Exercício 4



const automoveis: Veiculo[] = [
    { modelo: "Tracker", ano: 2019, marca: "Chevrolet" },
    { modelo: "Biz 125", ano: 2024, marca: "Honda" }
];

console.log("Relatório de Veículos:\n", gerarRelatorio(automoveis));