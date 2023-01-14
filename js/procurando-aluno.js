const alunos = ['João', 'Maria', 'Pedrinho', "Lucas"];
const medias = [10, 8, 7.5, 9];

const listaAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaAlunosEMedias[0].includes(aluno)) { //includes confere se o paramentro esta incluso
        console.log(`${aluno} está cadastrado!`)

        const indice = listaAlunosEMedias[0].indexOf(aluno); //indexOf retorna o indice que foi passado por parametro

        const mediaDoAluno = listaAlunosEMedias[1][indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não localizado")
    }
}

exibeNomeENota("João");