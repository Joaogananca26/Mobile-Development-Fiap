// Exercício 1

let nome = "João Henrique Murilla Ganança";
let idade = 19;
let aprovado = false;
let notas = [6.0, 8.0, 9.5]
let usuario = {email: "joaogananca26@gmail.com", senha: "joaozinho"}
console.log(nome, idade, aprovado, notas, usuario)

/* Null é quando você cria um variável com o valor "null" e ela só trocará o valor quando aplicar um valor válido a ela, já o undefined
é quando você define uma variável e não da um valor a ela.
*/

// Exercício 2

let valorNulo = null;  
let valorIndefinido;   

// Condicional para verificar se as variáveis são null ou undefined
if (valorNulo === null) {
    console.log("valorNulo é null");
} else if (valorNulo === undefined) {
    console.log("valorNulo é undefined");
}

if (valorIndefinido === undefined) {
    console.log("valorIndefinido é undefined");
} else if (valorIndefinido === null) {
    console.log("valorIndefinido é null");
}