const nomes = ['João', 'Maria', 'José'];

nomes.forEach(function (nome) {
    console.log(nome);
});

//console: João
        // Maria
        // José


//Exemplo 2 (Arrow Function):

nomes.forEach((nome) => {
    console.log(nome);
});

//console: João
        // Maria
        // José


//Exemplo 3 (Arrow Function):

function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);

//console: João
        // Maria
        // José