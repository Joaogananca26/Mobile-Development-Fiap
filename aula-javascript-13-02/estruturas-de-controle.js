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

