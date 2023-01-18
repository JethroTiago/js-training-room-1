const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

const meuSet = new Set([1, 1, 2, 3, 4, 4]);

console.log(meuSet); // Set(4) {1, 2, 3, 4}

//Exemplo 2

const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

const meuSet = new Set(nomes);

console.log(meuSet); // Set(4) {'Ana', 'Clara', 'Maria', 'João'}

//O Set() remove os duplicados

//Exemplo 3

const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados); // ['Ana', 'Clara', 'Maria', 'João']

//Usando o spreadoperator, é devolvido uma array atualizada sem nomes duplicados