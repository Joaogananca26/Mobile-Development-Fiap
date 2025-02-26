class GerenciadorVeiculos<T> {
    veiculos: T[] = [];

    adicionarVeiculo(veiculo: T): void{
        this.veiculos.push(veiculo);
    
    }
    
    removerVeiculo(veiculo: T, indice: number): void {
        this.veiculos.splice(indice);
    }
    
    pegarVeiculos(): T[] {
        return this.veiculos;
    }

}