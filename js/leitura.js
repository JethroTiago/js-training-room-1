import dados from './cliente.json' assert { type: "json" };

console.log(dados);
console.log(`É do tipo: ${typeof dados}`);

const clientEmString = JSON.stringify(dados);

console.log(clientEmString);
console.log(`É do tipo: ${typeof clientEmString}`);

const objetoCliente = JSON.parse(clientEmString);
console.log(objetoCliente);