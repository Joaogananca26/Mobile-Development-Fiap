// Exercício 1A 
// Função genérica 

function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numeros = [5, 10, 15, 20, 25];
const palavras = ["Olá", "Carros", "Jogos"];
console.log("Array invertido (números):", inverterArray(numeros)); 
console.log("Array invertido (palavras):", inverterArray(palavras)); 