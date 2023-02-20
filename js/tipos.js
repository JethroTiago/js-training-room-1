const cliente = {
    nome: "João",
    idade: 25,
    email: "joão@email.com",
    telefone: ["11992969091", "11998746856"],
}

cliente.enderecos = [
    {
        rua: "Rouxinol",
        casa: true,
        numero: 435,
    }
];


cliente.enderecos.push({
    rua: "Gralha Azul",
    casa: false,
    numero: 487,
});

console.log(cliente);

const exibeCasas = cliente.enderecos.filter((endereco) => endereco.casa === true);
console.log(exibeCasas);