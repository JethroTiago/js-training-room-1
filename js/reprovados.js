const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
    return true;
});

console.log(reprovados); //console: ['Ana', 'Marcos', 'Maria', 'Mauro']

//Em caso de um return false
//console.log(reprovados); irá exibir []

//Exemplo 2:

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {  //É preciso existir algo no primeiro parametro para poder acessar o segundo
    return medias[indice] < 7;
});

console.log(reprovados);//['Marcos']