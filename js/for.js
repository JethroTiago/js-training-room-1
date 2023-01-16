const numeros = [100, 200, 300, 400, 500, 600];

// A primeira expressão é executada apenas uma vez
// A segunda expressão é uma condição de execução
// A terceira expressão é executada sempre ao final do bloco

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}


const nomes = ['João', 'Maria', 'José'];
for (var indice = 0; indice < nomes.length; indice++) {
    console.log(nomes[indice]);
}

//Será exibido os três nomes no console