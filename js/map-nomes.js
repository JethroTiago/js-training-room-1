const nomes = ['ana julia', 'Caio vinicius', 'BIA silva'];

const nomesPadronizados = nomes.map((nome) => {
    return nome.toUpperCase();
});

console.log(nomesPadronizados); // ['ANA JULIA', 'CAIO VINICIUS', 'BIA SILVA']

//Melhorando verbosidade do Arrow Function:

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());
//Apaga as {} e o return, colocando na mesma linha.