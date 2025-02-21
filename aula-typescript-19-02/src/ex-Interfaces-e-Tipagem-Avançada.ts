// Exercício 1A
// Crie uma interface chamada Carro, que contenha as seguintes propriedades: marca (string) modelo (string) ano (number) motor (opcional, string)

/*
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

console.log("Meu Carro:");
console.log(`Marca: ${meuCarro.marca}`);
console.log(`Modelo: ${meuCarro.modelo}`);
console.log(`Ano: ${meuCarro.ano}`);
*/

// Exercício 2A
// Crie uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles. 
// Depois, implemente essa função e teste com diferentes valores.

interface multiplicacao {
    (x: number, y: number): number;
}
const multiplicar: multiplicacao = (x,y) => x * y;
console.log(multiplicar(2,2))