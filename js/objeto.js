// ISSO É UM OBJETO

const objeto = {
    nome: "Jethro",
    idade: 38,
    cpf: "22214430539"
}

console.log(objeto.nome);
console.log(`O nome da pessoa é ${objeto.nome} e ele tem ${objeto.idade} anos`);
console.log(`Os três primeiros números do cpf são: ${objeto.cpf.substring(0, 3)}`);