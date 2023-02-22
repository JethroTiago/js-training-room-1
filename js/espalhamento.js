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
    },
];

function ligaParaCliente(telComercial, telResidencial) {
    console.log(`Ligando para ${telComercial}`);
    console.log(`Ligando para ${telResidencial}`);
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]); //Exibe os dois telefones
ligaParaCliente(...cliente.telefone); //Spread operator que é a mesma coisa da chamada acima

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
};

console.log(encomenda);