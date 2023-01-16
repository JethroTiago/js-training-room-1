const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);


// let i = 0 "É a Variável de controle"
// i < notas.length "É a condição - 'Se indice for menor que a quantidade de coisas dentro de notas...'"
// i++ - "É o icremento da variavel de controle - ... então eu adiciono +1 ao valor de indice"