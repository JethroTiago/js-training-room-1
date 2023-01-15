const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [numerosPares, numerosImpares];

console.log(numeros); // Será exibido: [[2, 4, 6], [1, 3, 5]] no console

const numeros = [...numerosPares, ...numerosImpares];
console.log(numeros); // a reticências "abrem" o array e [2, 4, 6, 1, 3, 5] será exibido no console

//Exemplo 2:

const num1 = 1;
const num2 = 2;

console.log(num1, num2); // Será exibido 1, 2 no console

//Porem, se aplicado a desestruturação:

const [num1, num2] = [1, 2]

console.log(num1, num2); // Também será exibido 1, 2 no console

//Exemplo 3:

const pessoa = {
    nome: 'Jethro',
    idade: 38
}

const { nome } = pessoa;
console.log(nome); //Será exibido o nome dentro do objeto pessoa

const { idade } = pessoa;
console.log(idade); // Será exibido a idade dentro do objeto pessoa