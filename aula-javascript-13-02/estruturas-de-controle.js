// Exercício 1

// Exercício A
let numero;

numero = prompt("Escolha um número e irei te falar se é positivo, negativo ou se ele é zero!")

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// Exercício B
for (let i = 0; i < 11; i++){
    console.log(i)
}

// Exercício C
let soma = 0;
let i = 1;


while (i <= 5) {
    soma += i; 
    i++; 
}

console.log("A soma dos números de 1 a 5 é: " + soma);

// Exercício 2

let opcao;

do {
    // Exibe o menu para o usuário
    opcao = prompt("Escolha uma opção:\nA - Opção A\nB - Opção B\nS - Sair");

    // Usando switch-case para tratar as opções
    switch(opcao) {
        case 'A':
            console.log("Opção A selecionada");
            break;
        case 'B':
            console.log("Opção B selecionada");
            break;
        case 'S':
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida");
    }
} while (opcao !== 'S');