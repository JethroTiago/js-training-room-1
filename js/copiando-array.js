const notas = [7, 7, 8, 9];

const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`); //As novas notas são 7,7,8,9,10
console.log(`As notas originais são ${notas}`); //As notas originais são 7,7,8,9

//const novasNotas = [...notas];
//novasNotas.push(10);

//ou

//const novasNotas = [...notas, 0]; - O resultado é o mesmo!

//Spread operator...