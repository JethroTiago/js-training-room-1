const cliente = {
    nome: "João",
    idade: 25,
    email: "joão@email.com",
    telefone: ["11992969091", "11998746856"],
}

cliente.enderecos = [
    {
        rua: "Rouxinol",
        numero: 435,
        apt: true,
        complemento: "ap 900"
    }
];

for (let chave in cliente) {
    console.log(chave);
}