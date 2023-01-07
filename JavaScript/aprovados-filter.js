const alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Júlia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6 }
];

const aprovados = alunos.filter((aluno) => aluno.media > 7);
console.log(aprovados);
