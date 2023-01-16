const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas); // [10, 10, 9, 8, 7]

//"( return nota +1 ) Retorne nota + 1,
//"( >= 10 )          mas se nota +1 for maior/igual a 10..."
//"( ? 10)            então retorne 10. 
//"( : nota + 1 )     Se não for, então pode somar + 1"

const numeros = [1, 2, 3, 9];

const numeroMisticos = numeros.map((numero) => {
    return numero + 10 >= 15 ? 'Jethro' : numero + 10
})

console.log(numeroMisticos);