const turma = {
    alunos: [
        {
            username: 'felipemelo',
        }
    ],
    atividades: [
        {
            id: 1,
            owner: 'felipemelo',
            content: '2 x 2 = 4'
        }
    ],
};
// CREATE
function criarAtividade(resolucao) {
    turma.atividades.push({
        id: turma.atividades.length + 1,
        owner: resolucao.owner,
        content: resolucao.content
    });
}
criarAtividade({ owner: 'felipemelo', content: '7 x 5 = 35' }); 
criarAtividade({ owner: 'felipemelo', content: '3 x 9 = 27' }); 

// READ
function verAtividades() {
    return turma.atividades;
}
console.log(verAtividades());

// UPDATE
function atualizarAtividade(id, novaResolucao) {
    const novaAtividade = verAtividades().find((post) => {
        return post.id === id;
    });
    console.log(novaAtividade);
    novaAtividade.content = novaResolucao;
}
atualizarAtividade(1, '100 / 10 = 10');
console.log(verAtividades());

// DELETE
function apagaAtividade(id) {
    const listaAtualizada = verAtividades().filter((atvAtual) => {
        return atvAtual.id !== id;
    })
    turma.atividades = listaAtualizada;
}
apagaAtividade(1);
apagaAtividade(2);
apagaAtividade(3);
console.log(verAtividades());
