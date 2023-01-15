const alunos = ['João', 'Maria', 'Pedrinho', "Lucas"];
const medias = [10, 8, 7.5, 9];

const listaAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaAlunosEMedias[0].includes(aluno)) { //includes confere se o paramentro esta incluso
        
        const alunos = listaAlunosEMedias[0];
        const medias = listaAlunosEMedias[1];

        const indice = alunos.indexOf(aluno); //indexOf retorna o indice que foi passado por parametro
        const mediaDoAluno = medias[1][indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não localizado")
    }
}

exibeNomeENota("João");