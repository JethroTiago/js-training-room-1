const alunos = ['João', 'Maria', 'Pedrinho', "Lucas"];
const medias = [10, 8, 7.5, 9];

const listaAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado!`)
    } else {
        console.log("Aluno não localizado")
    }
}