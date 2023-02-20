const cliente = {
    nome: "João",
    idade: 25,
    email: "joão@email.com",
    telefone: ["11992969091", "11998746856"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente")
        } else {
            this.saldo -=valor;
            console.log(`Pagamento realizado. Novo saldo é igual a ${this.saldo}`)
        }
    },
};

cliente.efetuaPagamento(150);