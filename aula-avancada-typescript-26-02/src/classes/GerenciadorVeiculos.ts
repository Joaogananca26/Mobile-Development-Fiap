import { Veiculo } from "../interfaces/Veiculo";

export class GerenciadorVeiculos<T extends Veiculo> {

    private veiculos: T[] = [];

    adicionar(veiculo: T): void {
        this.veiculos.push(veiculo); 
    }

    remover(modelo: string): void {
        this.veiculos = this.veiculos.filter(v => v.modelo !== modelo);
    }

    listarVeiculos(): T[] {
        return this.veiculos; 
    }
}