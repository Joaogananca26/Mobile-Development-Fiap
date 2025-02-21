// Exercício 1A 
// Crie uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.
// Teste a função com um array de números e um array de strings.

function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numeros = [5, 10, 15, 20, 25];
const palavras = ["Olá", "Carros", "Jogos"];
console.log("Array invertido (números):", inverterArray(numeros)); 
console.log("Array invertido (palavras):", inverterArray(palavras)); 

// Exercício 2A
// Crie uma interface genérica chamada Repositorio<T>, que tenha um método salvar(dado: T): void e um método obterTodos(): T[].
// Depois, crie uma implementação dessa interface para armazenar uma lista de usuários (com nome e email).

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}
const repo = new UsuarioRepositorio();
repo.salvar({ nome: "Guilherme", email: "guilherme123@gmail.com" });
repo.salvar({ nome: "Raul", email: "raul@gmail.com" });
console.log("Lista de usuários:", repo.obterTodos());
