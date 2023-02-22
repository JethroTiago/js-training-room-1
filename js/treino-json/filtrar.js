import clientes from "./clientes.json" assert { type: "json" };

function filtrarApartamentosSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && 
            cliente.endereco.hasOwnProperty("complemento"))
    });
}