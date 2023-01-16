//Exemplo 1:

const notas = [10, 6.5, 8, 7.5];

notas.forEach(function () {
    console.log('Oi!');
});

//A palavra 'Oi!' aparece 4 vezes no console, que é a quantidade de itens dentro do array
//O function (anônimo) está dentro de outra funcão - A isso chamamos CallBack

//Exemplo 2:

let somaDasNotas = 0;

notas.forEach(function (nota) {
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

//console: A média das notas é 8.

//Callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos: 
//o ELEMENTO, o ÍNDICE e o ARRAY ATUAL, respectivamente. No exemplo acima, o elemento é nota (dentro da function)