import { Veiculo } from "../interfaces/Veiculo";

export function gerarRelatorio(automoveis: Veiculo[]): string {

    if (automoveis.length === 0) {
        return "Nenhum veículo cadastrado."; 
    }

    return automoveis
        .map(v => `Modelo: ${v.modelo} | Ano: ${v.ano} | Marca: ${v.marca}`) 
        .join("\n"); 
}