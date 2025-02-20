// Exercício 1A

function converterParaMaiusculas(string) {
    return string.toUpperCase();
}

let testar = "teste";
let resultado = converterParaMaiusculas(testar)
console.log(resultado)

// Exercício 1B

//const converterParaMaiusculas = (string) => string.toUpperCase();

// Exercício 1C

function escopo(){
    let mensagem = "Tente acessar esta mensagem fora dessa função!"
}

//console.log(mensagem)

// Não é possivel mostrar essa mensagem, pois ela só pode ser acessada dentro da função na qual ela foi criada.

// Exercício 2A
function processarDados(callback){
    console.log("Processando...");
    callback();
}
processarDados(() => console.log("Processo concluido!"));

// Exercício 2B
async function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nome: "Fulano", id: 1 });
        }, 1000); 
    });
}
buscarUsuario().then(console.log);